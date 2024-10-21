const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Log the email sending attempt
  console.log('Attempting to send email with options:', {
    to: options.email,
    subject: options.subject,
    // Don't log the full message for privacy reasons
    messageLength: options.message.length
  });

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use Gmail service
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,  // Use SSL
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  // Prepare email message
  const message = {
    from: `"${process.env.FROM_NAME || 'Default Name'}" <${process.env.SMTP_MAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  try {
    // Send email
    const info = await transporter.sendMail(message);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    // Provide more detailed error information
    if (error.code === 'EAUTH') {
      console.error('Authentication failed. Please check your Gmail credentials and make sure you\'re using an App Password if 2FA is enabled.');
    }
    throw error;  // Rethrow the error so it can be handled by the caller
  }
};

module.exports = sendEmail;