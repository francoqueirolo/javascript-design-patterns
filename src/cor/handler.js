export class Handler {
  constructor(communicationType, handler, nextHandler) {
    this.communicationType = communicationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  }

  handleCommunication(communication) {
    if (communication.type !== this.communicationType) {
      console.log(
        `[${this.communicationType}-Handler] It's cannot handle: ${communication.type}`
      );
      return this.nextHandler
        ? this.nextHandler.handleCommunication(communication)
        : console.log(`Any other communication: ${communication.type}`);
    }

    console.log(`[${this.communicationType}-Handler] Handling...`);
    return this.handler(communication);
  }
}
