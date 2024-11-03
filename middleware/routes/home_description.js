const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Token expired or invalid', redirect: '/login' });
      }
      next(); // Proceed to the next middleware if the token is valid
    });
  } catch (err) {
    console.error('Authentication error:', err);
    return res.status(500).json({
      success: false,
      message: 'Error during authentication',
    });
  }
};

// Endpoint to retrieve image and description based on description_id from home_description table
router.get('/home/description/:description_id', authenticateToken, async (req, res) => {
  const db = router.locals.db;
  const { description_id } = req.params;

  try {
    // Query the home_description table for the specified description_id
    const description = await db('home_description')
      .select('image', 'description')
      .where({ description_id })
      .first();

    if (!description) {
      return res.status(404).json({ success: false, message: 'Description not found' });
    }

    res.status(200).json({
      success: true,
      data: description,
    });
  } catch (err) {
    console.error('Error retrieving description:', err);
    return res.status(500).json({
      success: false,
      message: 'Error occurred while retrieving the description',
    });
  }
});

module.exports = {
  path: '/home/description',
  router,
};
