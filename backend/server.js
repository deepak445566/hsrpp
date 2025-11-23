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
  origin: ['https://bookingmynumberplatehsrp.com', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Config
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/plate')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.log('❌ MongoDB Connection Failed - Using Demo Mode');
    console.log('💡 Install MongoDB locally or fix Atlas connection');
  });

// Simple In-Memory Storage
let demoImage = null;
const demoContacts = [];

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

// Upload Image (Protected Route)
app.post('/api/upload-image', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    console.log('Uploading image to Cloudinary...');

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'contact-form-images' },
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

    demoImage = result.secure_url;
    console.log('Image uploaded:', result.secure_url);

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
app.get('/api/display-image', (req, res) => {
  if (demoImage) {
    res.json({ imageUrl: demoImage });
  } else {
    res.status(404).json({ error: 'No image found' });
  }
});

// Contact Form (Public Route)
app.post('/api/contact', (req, res) => {
  try {
    const formData = req.body;
    demoContacts.push({ ...formData, timestamp: new Date() });
    
    res.json({ 
      success: true, 
      message: 'Form submitted successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

// Get all contacts (Protected Route)
app.get('/api/contacts', authenticateToken, (req, res) => {
  res.json(demoContacts);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🔑 Admin: admin@example.com / admin123`);
  console.log(`📊 Health: http://localhost:${PORT}/api/health`);
  console.log(`🖼️ Display Image: http://localhost:${PORT}/api/display-image`);
});