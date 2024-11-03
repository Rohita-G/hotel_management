const express = require('express');
const router = express.Router();
require('dotenv').config();

const serverUrl = 'http://localhost:3500'; // Update to your current server URL

// Employee registration route
router.post('/', async (req, res) => {
  console.log('Received a request for employee registration');

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    country,  // Required field
    zip,      // Required field
    phone,    // Required field
    extension // Required field
  } = req.body;

  const db = router.locals.db;

  if (!firstName || !lastName || !email || !password || !confirmPassword || !country || !zip || !phone || !extension) {
    console.log('Validation failed: Missing required fields');
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
      data: null,
    });
  }

  if (password !== confirmPassword) {
    console.log('Validation failed: Passwords do not match');
    return res.status(400).json({
      success: false,
      message: 'Passwords do not match',
      data: null,
    });
  }

  try {
    console.log('Checking if email already exists in the database...');
    const existingResults = await db('userAccounts')
      .select('employee_id')
      .where('email', email);

    if (existingResults.length > 0) {
      console.log('Email already exists in the database');
      return res.status(401).json({
        success: false,
        message: 'Email already exists',
        data: null,
      });
    }

    const trx = await db.transaction();

    try {
      const [insertedId] = await trx('userAccounts').insert({
        first_name: firstName,
        last_name: lastName,
        email,
        password, // Assuming password is stored securely (e.g., hashed)
        country,
        zip,
        extension,
        phone_number: phone,
      });

      await trx.commit();

      console.log('Employee registered successfully');
      return res.status(201).json({
        success: true,
        message: 'Employee registered successfully.',
        data: null,
      });
    } catch (insertError) {
      await trx.rollback();
      console.error('Error during transaction:', insertError);
      throw insertError;
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred',
      data: null,
    });
  }
});

module.exports = {
  path: '/user/register',
  router,
};
