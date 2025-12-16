// handlers/email.js
import { Handler } from '../handler';

const handleEmail = (email) => {
  console.log(`📧 Email enviado a ${email.recipient}: ${email.message}`);
  return true;
};

export const emailHandler = new Handler('email', handleEmail, {
  handleCommunication: (comm) => {
    console.log('⚠️ ¡Este es el final de la cadena!');
    console.log(`Ningún manejador pudo procesar: ${comm.type}`);
    return false;
  }
});