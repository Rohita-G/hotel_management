import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for phone input styling
import './RegisterContent.css'; 

function Content() {
    return (
        <div className="register-content">
            <h2>Register</h2>
            <form className="register-form">
                {/* Personal Information */}
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                
                {/* Location Information */}
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" required />
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Postal/Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" required />
                </div>
                
                {/* Contact Information */}
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" name="mobile" required />
                </div>
                {/* Contact Information - Phone Section with Country Selector */}
                <div className="form-group phone-section">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className="phone-input-container">
                        <PhoneInput
                            country={'us'} // Set default country
                            enableSearch={true} // Enable search within the dropdown
                            inputProps={{
                                name: 'phoneNumber',
                                required: true,
                                autoFocus: false,
                            }}
                        />
                        <select id="phoneType" name="phoneType" required className="phone-type-dropdown">
                            <option value="">Type</option>
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                            <option value="mobile">Mobile</option>
                        </select>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                {/* Password Fields */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                
                {/* Verification Method */}
                <div className="form-group">
                    <label htmlFor="verificationMethod">I would like to verify my account by:</label>
                    <select id="verificationMethod" name="verificationMethod" required>
                        <option value="">Select Method</option>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                    </select>
                </div>
                
                {/* Register Button */}
                <button type="submit" className="register-button">Register</button>
            </form>
            
            {/* Additional Text and Links */}
            <p className="info-text">Please be patient as it may take a few minutes to process your request. Do not refresh the page during this time.</p>
            <p>Already a member? <Link to="/login">Sign In</Link></p>
            <p>Already a member but don’t have an online account? <a href="#">Set Up Your Account</a></p>
        </div>
    );
}

export default Content;
