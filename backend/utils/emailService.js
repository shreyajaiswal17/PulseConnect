import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Email validation function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidFormat = emailRegex.test(email);
  
  // Prevent test/fake emails
  const testDomains = ['test.com', 'example.com', 'test.user', 'localhost', 'invalid'];
  const isDomainFake = testDomains.some(domain => email.toLowerCase().includes(domain));
  
  return isValidFormat && !isDomainFake;
};

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS  // App Password (not regular password)
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email service connection failed:', error.message);
  } else {
    console.log('✅ Email service ready - SMTP connection verified');
  }
});

// Send email to donors when blood request is created
export const sendBloodRequestEmail = async (donorEmail, donorName, requestDetails) => {
  const { patientName, bloodGroup, city, phone, note } = requestDetails;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: donorEmail,
    subject: `🩸 Urgent Blood Request - ${bloodGroup} in ${city}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #e74c3c; border-radius: 10px;">
        <h2 style="color: #e74c3c; text-align: center;">🩸 Blood Donation Request</h2>
        
        <p>Dear <strong>${donorName}</strong>,</p>
        
        <p>A patient urgently needs <strong>${bloodGroup}</strong> blood in your city!</p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Request Details:</h3>
          <p><strong>Patient Name:</strong> ${patientName}</p>
          <p><strong>Blood Group:</strong> <span style="color: #e74c3c; font-size: 18px; font-weight: bold;">${bloodGroup}</span></p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Contact:</strong> ${phone}</p>
          ${note ? `<p><strong>Note:</strong> ${note}</p>` : ''}
        </div>
        
        <p style="color: #e74c3c; font-weight: bold;"> Your help can save a life!</p>
        
        <p>If you're available to donate, please contact the requester immediately at <strong>${phone}</strong></p>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 12px; color: #666;">
            This is an automated notification from रक्तदातृ (PulseConnect)<br/>
            Thank you for being a life saver! 🙏
          </p>
        </div>
      </div>
    `
  };

  try {
    // Validate email before sending
    if (!isValidEmail(donorEmail)) {
      console.warn(`⚠️ Invalid email address: ${donorEmail} - Email not sent`);
      return false;
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${donorEmail} | Message ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`❌ Email failed to ${donorEmail}: ${error.message}`);
    return false;
  }
};

// Send confirmation email to requester
export const sendRequestConfirmationEmail = async (requesterEmail, requestDetails, matchCount) => {
  const { patientName, bloodGroup, city } = requestDetails;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: requesterEmail,
    subject: `✅ Blood Request Submitted - ${bloodGroup}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #27ae60; border-radius: 10px;">
        <h2 style="color: #27ae60; text-align: center;">✅ Request Submitted Successfully</h2>
        
        <p>Your blood request has been successfully submitted!</p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Request Summary:</h3>
          <p><strong>Patient:</strong> ${patientName}</p>
          <p><strong>Blood Group:</strong> <span style="color: #e74c3c; font-size: 18px; font-weight: bold;">${bloodGroup}</span></p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Matching Donors Found:</strong> ${matchCount}</p>
        </div>
        
        <p style="color: #27ae60; font-weight: bold;">
          ${matchCount > 0 ? `Great news! We found ${matchCount} matching donor(s) and they have been notified via email.` : ' No matching donors found yet. We will notify you when donors register.'}
        </p>
        
        <p>You will be contacted by donors directly.</p>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 12px; color: #666;">
            Best wishes from PulseConnect Team<br/>
            Together we save lives!
          </p>
        </div>
      </div>
    `
  };

  try {
    // Validate email before sending
    if (!isValidEmail(requesterEmail)) {
      console.warn(`⚠️ Invalid email address: ${requesterEmail} - Email not sent`);
      return false;
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${requesterEmail} | Message ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`❌ Confirmation email failed to ${requesterEmail}: ${error.message}`);
    return false;
  }
};

// Send contact form confirmation email
export const sendContactConfirmationEmail = async (userEmail, userName, contactDetails) => {
  const { subject, message } = contactDetails;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `We received your message - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #3498db; border-radius: 10px;">
        <h2 style="color: #3498db; text-align: center;"> Message Received</h2>
        
        <p>Dear <strong>${userName}</strong>,</p>
        
        <p>Thank you for reaching out to us! We have successfully received your message.</p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Message Details:</h3>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="color: #555; font-style: italic;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
        
        <p>Our team will review your message and get back to you as soon as possible. We typically respond within 24-48 hours.</p>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 12px; color: #666;">
            Thank you for contacting PulseConnect <br/>
            Saving lives, one donation at a time.
          </p>
        </div>
      </div>
    `
  };

  try {
    // Validate email before sending
    if (!isValidEmail(userEmail)) {
      console.warn(`⚠️ Invalid email address: ${userEmail} - Email not sent`);
      return false;
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Contact confirmation email sent to ${userEmail} | Message ID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`❌ Contact confirmation email failed to ${userEmail}: ${error.message}`);
    return false;
  }
};
