import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './LoginContent.css'; // Import the CSS file for styling

function Content() {
    return (
        <div className="login-content">
            <h2>Login</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            
            {/* Additional Links */}
            <p className="additional-links">
                <span>Don't have an account? <Link to="/register">Create New Account</Link></span>
            </p>
            <p className="additional-links">
                <span>Already have an account? <Link to="/login">Sign In</Link></span>
            </p>
        </div>
    );
}

export default Content;
