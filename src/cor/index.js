import { callHandler } from './handlers/call';

export const cor = {
  init: function () {
    const invalidRequest = {
      type: 'whatsapp',
      number: '123456789',
      message: 'Test message',
    };

    console.log('Initializing COR...');
    callHandler.handleCommunication(invalidRequest);

    const requestSMS = {
      type: 'sms',
      number: '987654321',
      message: 'Hello, how are you?',
    };

    callHandler.handleCommunication(requestSMS);
  },
};
