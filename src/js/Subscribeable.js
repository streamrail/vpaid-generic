import PubSub from 'PubSub';

export default class Subscribeable {
  constructor() {
    this.pubsub = new PubSub();
  }

  subscribe(fn, event, listenerScope) {
    console.log('subscribe', arguments);
    this.pubsub.subscribe(event, fn.bind(listenerScope));
    return this;
  }

  unsubscribe(fn, event) {
    this.pubsub.unsubscribe(event, fn);
    return this;
  }

  publish(event, args) {
    console.log('publish', arguments);
    this.pubsub.publish(event, args);
    return this;
  }
}