import axios from 'axios';

const BREVO_API_KEY = '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';
const BREVO_EMAIL_SENDER = 'team@infrahive.io';

const sendThankYouEmail = async (recipientEmail: any) => {
  try {
    const sendinblueEndpoint = 'https://api.sendinblue.com/v3/smtp/email';
    const sendinblueData = {
      sender: { email: BREVO_EMAIL_SENDER },
      to: [{ email: recipientEmail }],
      subject: 'Thank You for Contacting Us',
      htmlContent: `
      <p>Thank you for submitting the form. We appreciate your interest!</p>
      Best regards,<br />
      The InfraHive Team
    `
    };

    const response = await axios.post(sendinblueEndpoint, sendinblueData, {
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      }
    });

    console.log('Thank you email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending thank you email:', error);
  }
};

export default sendThankYouEmail;
