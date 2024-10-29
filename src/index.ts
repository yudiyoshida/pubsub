import { PubSub, SubscriberImpl } from "./pubsub";

const pubsub = new PubSub();
const sub1 = new SubscriberImpl('sub 01');
const sub2 = new SubscriberImpl('sub 02');
const sub3 = new SubscriberImpl('sub 03');

pubsub.subscribe('hello', sub1);
pubsub.subscribe('hello', sub2);
pubsub.publish('hello', 'world');
pubsub.publish('hello', 'jhon doe');

pubsub.unsubscribe('hello', sub2);
pubsub.subscribe('hello', sub3);
pubsub.publish('hello', 'xpto');