import React from 'react';
import './Admindetails.css';

export default function Admindetails() {
  const adminData = [
    { name: 'Sandipan Das', email: 'sd901656@gmail.com', message: 'Welcome to the admin panel!' },
    { name: 'John Doe', email: 'johndoe@example.com', message: 'Checking admin privileges' },
    // Add more data as needed
  ];

  return (
    <div className="admin-details-container">
      <h1>Admin Details</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((admin, index) => (
            <tr key={index}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
