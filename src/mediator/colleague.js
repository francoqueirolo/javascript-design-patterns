export class Colleague {
  constructor(id, mediator) {
    this.id = id;
    this.mediator = mediator;
  }

  receiveMessage(message) {
    console.log('Module', this.id, 'received message:', message);
    return true;
  }

  sendMessage(message, recipientId) {
    recipientId
      ? this.mediator.send(recipientId, message)
      : this.mediator.broadcast(message, this);
  }

  static create(id, mediator) {
    var that = new Colleague(id, mediator);

    mediator.register(that);

    return that;
  }
}
