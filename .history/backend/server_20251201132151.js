const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://bookingshsrp.com','', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Config - Memory Storage
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/plate')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.log('❌ MongoDB Connection Failed - Using Demo Mode');
  });

// MongoDB Schemas
const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);
const Contact = mongoose.model('Contact', contactSchema);

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running', 
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Demo Mode',
    timestamp: new Date().toISOString()
  });
});

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'admin@example.com' && password === 'admin123') {
    const token = jwt.sign(
      { email: email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      admin: { email: email },
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Upload Image (Protected Route) - CLOUDINARY UPLOAD
app.post('/api/upload-image', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    console.log('Uploading image to Cloudinary...');

    // Upload to Cloudinary with permanent settings
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { 
          folder: 'hsrp_plate_images',
          resource_type: 'image',
          type: 'upload',
          access_mode: 'public',
          use_filename: true,
          unique_filename: true,
          overwrite: false
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer);
    });

    // Delete previous image from Cloudinary and database
    try {
      const previousImage = await Image.findOne().sort({ uploadedAt: -1 });
      if (previousImage) {
        await cloudinary.uploader.destroy(previousImage.publicId);
        await Image.findByIdAndDelete(previousImage._id);
      }
    } catch (deleteError) {
      console.log('No previous image to delete or delete failed:', deleteError.message);
    }

    // Save new image to MongoDB
    const newImage = new Image({
      imageUrl: result.secure_url,
      publicId: result.public_id
    });
    await newImage.save();

    console.log('Image uploaded and saved successfully:', result.secure_url);

    res.json({
      message: 'Image uploaded successfully',
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed: ' + error.message });
  }
});

// Get Display Image (Public Route)
app.get('/api/display-image', async (req, res) => {
  try {
    const latestImage = await Image.findOne().sort({ uploadedAt: -1 });
    if (latestImage) {
      res.json({ imageUrl: latestImage.imageUrl });
    } else {
      res.status(404).json({ error: 'No image found' });
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// Contact Form (Public Route)
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Save to MongoDB
    const newContact = new Contact(formData);
    await newContact.save();
    
    res.json({ 
      success: true, 
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

// Get all contacts (Protected Route)
app.get('/api/contacts', authenticateToken, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ timestamp: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Get all uploaded images (Protected Route)
app.get('/api/images', authenticateToken, async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

// Get latest image (Protected Route)
app.get('/api/latest-image', authenticateToken, async (req, res) => {
  try {
    const latestImage = await Image.findOne().sort({ uploadedAt: -1 });
    res.json(latestImage || {});
  } catch (error) {
    console.error('Error fetching latest image:', error);
    res.status(500).json({ error: 'Failed to fetch latest image' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🔑 Admin: admin@example.com / admin123`);
  console.log(`📊 Health: http://localhost:${PORT}/api/health`);
  console.log(`🖼️ Display Image: http://localhost:${PORT}/api/display-image`);
});