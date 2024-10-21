const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

exports.submitContact = async (req, res, next) => {
  const { name, email, message } = req.body;

  try {
    // Create contact in database
    const contact = await Contact.create({
      name,
      email,
      message
    });

    // Send email to admin
    await sendEmail({
      email: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      message: `You have a new contact form submission from ${name} (${email}). Message: ${message}`
    });

    // Send confirmation email to user
    await sendEmail({
      email: email,
      subject: 'Thank you for contacting us',
      message: `Dear ${name}, thank you for contacting us. We have received your message and will get back to you soon.`
    });

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};