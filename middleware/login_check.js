const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
require('dotenv').config();

// Route to validate login credentials, issue JWT, and store session ID
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const db = router.locals.db;

  // Logging received email and password
  console.log('Received email:', email);
  console.log('Received password:', password);

  if (!email || !password) {
    console.log('Email or Password missing in the request');
    return res.status(400).json({
      success: false,
      message: 'Email and Password are required',
      data: null,
    });
  }

  try {
    // Querying the database for the email
    console.log(`Querying the database for email: ${email}`);
    const result = await db('login_creds').select('*').where({ email }).first();

    if (!result) {
      console.log('No user found for the given email');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        data: null,
      });
    }

    console.log('User found:', result);

    // Step 2: Compare the plain password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, result.password);

    // Logging the result of password comparison
    console.log('Password validation result:', isPasswordValid);

    if (isPasswordValid) {
      console.log('Password is valid. Proceeding to create JWT and session.');
 // Generate session ID
 const sessionId = uuidv4();
 console.log('Generated session ID:', sessionId);
      // Generate JWT token
      const token = jwt.sign({ session_id: result.session_id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
      console.log('Generated JWT token:', token);

     

      // Update the session_id in the database
      await db('login_creds').where('employee_id', result.employee_id).update({ session_id: sessionId });
      console.log('Updated session ID in the database');

      // Set JWT and session ID as HttpOnly cookies
      res.cookie('jwt_token', token, {
        httpOnly: false,  // Ensure it's only accessible by the server
        secure: process.env.NODE_ENV === 'production',  // Use `true` in production
        sameSite: 'Lax',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });
      
      
      res.cookie('session_id', sessionId, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',  // Disable secure for development
        sameSite: 'Strict',
        maxAge: 3600000,  // 1 hour
      });
      
        

    // Set CORS headers specific to this route
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
      console.log('Cookies set: jwt_token and session_id');

      // Return response with session ID and employee ID in body (for debugging or frontend use)
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        data: { 
          jwt_token: token, // Optionally return the JWT token for debugging
          session_id: sessionId, 
          // employee_id: result.employee_id 
        },
      });
    } else {
      console.log('Password mismatch. Invalid credentials.');
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        data: null,
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({
      success: false,
      message: 'Error during login',
      data: null,
    });
  }
});

module.exports = {
  path: '/employee/login/check',
  router,
};
