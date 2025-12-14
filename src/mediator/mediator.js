export class Mediator {
  constructor() {
    this.colleagues = [];
  }
  register(colleague) {
    this.colleagues.push(colleague);
  }

  send(recipientId, message) {
    this.colleagues.some(function (colleague) {
      if (colleague.id === recipientId) {
        return colleague.receiveMessage(message);
      }
    });
  }

  broadcast(message, sender) {
    this.colleagues.forEach(function (colleague) {
      if (colleague.id !== sender.id) {
        colleague.receiveMessage(message);
      }
    });
  }
}
