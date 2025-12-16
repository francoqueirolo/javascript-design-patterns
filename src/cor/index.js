import { callHandler } from './handlers/call';

export const cor = {

  init: function () {
    const solicitudInvalida = {
      type: 'whatsapp',  // Tipo que no tiene manejador específico
      number: '123456789',
      message: 'Mensaje de prueba'
    };

    console.log('🚀 Iniciando cadena de responsabilidad...');
    callHandler.handleCommunication(solicitudInvalida);

    // Ejemplo de una solicitud que será manejada por el segundo manejador
    const solicitudSMS = {
      type: 'sms',
      number: '987654321',
      message: 'Hola, ¿cómo estás?'
    };

    callHandler.handleCommunication(solicitudSMS);
  }
}

