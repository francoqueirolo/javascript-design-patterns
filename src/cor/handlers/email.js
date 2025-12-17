import { Handler } from '../handler';

const handleEmail = (email) => {
  console.log(`Email sent to ${email.recipient}: ${email.message}`);
  return true;
};

export const emailHandler = new Handler('email', handleEmail, {
  handleCommunication: (comm) => {
    console.log('This is an email handler');
    console.log(`Any other communication: ${comm.type}`);
    return false;
  },
});
