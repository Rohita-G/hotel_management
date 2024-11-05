import React from 'react';

function Content() {
    return (
        <div className="content-container">
            <h2>Register</h2>
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" style={{
                    position: 'relative',
                    backgroundColor: '#bead8e',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    border: 'none',
                    width: '200px',
                    letterSpacing: '3px',
                    padding: '15px 0',
                    transition: 'all 0.3s ease-out 0s'
                }}>Register</button>
            </form>
        </div>
    );
}

export default Content;