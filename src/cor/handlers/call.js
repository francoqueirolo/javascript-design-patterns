import { Handler } from '../handler';
import { smsHandler } from './sms';

const handleCall = (call) => {
  console.log(`Llamada a ${call.number} desde ${call.ownNumber}: ${call.message}`);
  return true;
};

export const callHandler = new Handler('call', handleCall, smsHandler);