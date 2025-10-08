// EmailJS Configuration
// Get these values from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS service ID
  serviceId: 'service_2bu0gyp',
  
  // Replace with your actual EmailJS template ID
  templateId: 'template_zg6kiac',
  
  // Replace with your actual EmailJS public key
  publicKey: '5Vbar6SO7cuDCk2qS',
  
  // Email template variables
  templateParams: {
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Çağdaş Aldoğan'
  }
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create a new email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values above with your actual credentials
// 7. Update the template to include: {{from_name}}, {{from_email}}, {{message}}, {{to_name}}
