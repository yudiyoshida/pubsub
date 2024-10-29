interface Subscriber {
  message(data: any): void;
}

export class PubSub {
  private topics: {
    [key: string]: Subscriber[];
  }

  constructor() {
    this.topics = {};
  }

  subscribe(topic: string, subscriber: Subscriber) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(subscriber);
  }

  unsubscribe(topic: string, subscriber: Subscriber) {
    if (!this.topics[topic]) return;

    this.topics[topic] = this.topics[topic].filter(s => s != subscriber);
  }

  publish(topic: string, data: string) {
    if (!this.topics[topic]) return;

    this.topics[topic].forEach((s) => {
      s.message(data);
    })
    console.log('----')
  }
}

export class SubscriberImpl implements Subscriber {
  constructor(private name: string) {}

  message(data: any): void {
    console.log(`console log from ${this.name}: ${data}`)
  }
}