import { Handler } from '../handler';
import { smsHandler } from './sms';

const handleCall = (call) => {
  console.log(`Call to ${call.number} from ${call.ownNumber}: ${call.message}`);
  return true;
};

export const callHandler = new Handler('call', handleCall, smsHandler);