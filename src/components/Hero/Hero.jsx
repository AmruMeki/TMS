import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  const [role, setRole] = useState(''); // Initialize the role state
   const handleRoleChange = (event) => {
  setRole(event.target.value); // Update role state when the dropdown changes
};
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better transportation for better world</h1>

        <div className="btn-div">
          {/* <button className="btn hero-btn">
            Explore more <img src={dark_arrow} alt="" />
          </button> */}
          <div>
            <label htmlFor="role-select" className='role-header'>Choose Role:</label>
            <select id="role-select" value={role} onChange={handleRoleChange} className='selector-role'>
              <option value="">Enter Role</option>
              <option value="customerService">Customer Service</option>
              <option value="admin">Admin</option>
            </select>

            {role === 'customerService' && (
              <div>
                <h3>Customer Service Dashboard</h3>
                <p>Access customer inquiries, support tickets, etc.</p>
                {/* Add relevant components or content for Customer Service here */}
              </div>
            )}

            {role === 'admin' && (
              <div>
                <h3>Admin Dashboard</h3>
                <p>Manage users, settings, and other administrative tasks.</p>
                {/* Add relevant components or content for Admin here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
