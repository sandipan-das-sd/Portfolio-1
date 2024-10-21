import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admindetails.css';

export default function Admindetails() {
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('https://portfolio-1-5jex.onrender.com/api/v1/contact');
        setContactData(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch contact data. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching contact data:', err);
      }
    };

    fetchContactData();
  }, []);

  if (isLoading) {
    return <div className="admin-details-container">Loading...</div>;
  }

  if (error) {
    return <div className="admin-details-container error">{error}</div>;
  }

  return (
    <div className="admin-details-container">
      <h1>Contact Submissions</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}