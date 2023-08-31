// pages/api/utils/sendEmailToTeam.ts
import axios from 'axios';

const BREVO_API_KEY = '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';
const TEAM_EMAIL = 'team@infrahive.io';

const sendEmailToTeam = async (formData: any) => {
  try {
    const sendinblueEndpoint = 'https://api.sendinblue.com/v3/smtp/email';
    const sendinblueData = {
      sender: { email: formData.email },
      to: [{ email: TEAM_EMAIL }],
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      htmlContent: `
        <p>You have received a new contact form submission:</p>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone Number:</strong> ${formData.phoneCountryCode} ${formData.phoneNumber}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Team:</strong> ${formData.team}</p>
        <p><strong>Goals:</strong> ${formData.goals}</p>
        <p><strong>Industry:</strong> ${formData.industry}</p>
        <p><strong>Customer Size:</strong> ${formData.customerSize}</p>
      `
    };

    const response = await axios.post(sendinblueEndpoint, sendinblueData, {
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      }
    });

    console.log('Contact data sent to team successfully:', response.data);
  } catch (error) {
    console.error('Error sending contact data to team:', error);
  }
};

export default sendEmailToTeam;
