/**
 * PubSub (Publish-Subscribe) Pattern Implementation
 * A messaging pattern where senders (publishers) send messages to subscribers
 * without knowing who the subscribers are.
 */
class PubSub {
  constructor() {
    // Object to store topic subscribers
    // Format: { topic: [callback1, callback2, ...] }
    this.subscribers = {};
  }

  /**
   * Publish data to a specific topic
   * @param {string} topic - The topic to publish to
   * @param {*} data - Data to send to subscribers
   */
  publish(topic, data) {
    // If no subscribers for this topic, do nothing
    if (!this.subscribers[topic]) {
      return;
    }

    // Call all subscriber callbacks with the provided data
    this.subscribers[topic].forEach(subscriber => {
      subscriber(data);
    });
  }

  /**
   * Subscribe to a topic
   * @param {string} topic - The topic to subscribe to
   * @param {Function} callback - Function to call when topic is published to
   * @returns {Object} An object with a dispose method to unsubscribe
   */
  subscribe(topic, callback) {
    // Initialize topic array if it doesn't exist
    if (!this.subscribers[topic]) {
      this.subscribers[topic] = [];
    }

    // Add callback to topic's subscribers and save its index
    const index = this.subscribers[topic].push(callback) - 1;

    // Return subscription object with dispose method
    return {
      dispose: () => {
        // Remove this specific callback from subscribers
        this.subscribers[topic].splice(index, 1);
      }
    };
  }
}

export const pubsub = new PubSub();
