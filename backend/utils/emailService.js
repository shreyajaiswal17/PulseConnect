import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS  // App Password (not regular password)
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
        
        <p style="color: #e74c3c; font-weight: bold;">⏰ Your help can save a life!</p>
        
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
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${donorEmail}`);
    return true;
  } catch (error) {
    console.error(`❌ Email failed to ${donorEmail}:`, error.message);
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
          ${matchCount > 0 ? `🎉 Great news! We found ${matchCount} matching donor(s) and they have been notified via email.` : '⚠️ No matching donors found yet. We will notify you when donors register.'}
        </p>
        
        <p>You will be contacted by donors directly.</p>
        
        <div style="text-align: center; margin-top: 30px;">
          <p style="font-size: 12px; color: #666;">
            Best wishes from रक्तदातृ Team 🙏<br/>
            Together we save lives!
          </p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${requesterEmail}`);
    return true;
  } catch (error) {
    console.error(`❌ Confirmation email failed:`, error.message);
    return false;
  }
};
