import { Handler } from '../handler';
import { emailHandler } from './email';

const handleSms = (sms) => {
  console.log(`SMS enviado a ${sms.number}: ${sms.message}`);
  return true;
};

export const smsHandler = new Handler('sms', handleSms, emailHandler);