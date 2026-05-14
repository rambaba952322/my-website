import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
  const sendEmail = async (emailData) => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

    // Send main notification email to the academy
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY);

    // Send auto-reply confirmation to the user
    await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      {
        name: emailData.name,
        email: emailData.email,
        courses: emailData.courses,
        qualification: emailData.qualification,
      },
      PUBLIC_KEY
    );
  };

  return { sendEmail };
};