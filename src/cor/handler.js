export class Handler {
  constructor(communicationType, handler, nextHandler) {
    this.communicationType = communicationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  }

  handleCommunication(communication) {
    if (communication.type !== this.communicationType) {
      console.log(`[${this.communicationType}Handler] No puedo manejar esto, pasando al siguiente...`);
      return this.nextHandler 
        ? this.nextHandler.handleCommunication(communication)
        : console.log(`❌ Ningún manejador pudo procesar: ${communication.type}`);
    }
    
    console.log(`[${this.communicationType}Handler] Procesando...`);
    return this.handler(communication);
  }
}