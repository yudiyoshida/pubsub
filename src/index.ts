import { PubSub, SubscriberImpl } from "./pubsub";

const pubsub = new PubSub();
const sub1 = new SubscriberImpl('sub 01');
const sub2 = new SubscriberImpl('sub 02');
const sub3 = new SubscriberImpl('sub 03');

pubsub.subscribe('foo', sub1);
pubsub.subscribe('foo', sub2);
pubsub.subscribe('bar', sub2);

pubsub.publish('foo', 'hello, world'); // sub1 and sub2 will receive this message
pubsub.publish('bar', 'lorem ipsum'); // only sub2 will receive this message

pubsub.unsubscribe('foo', sub2);
pubsub.subscribe('bar', sub3);

pubsub.publish('foo', 'jhon doe'); // only sub1 will receive this message
pubsub.publish('bar', 'xpto'); // sub2 and sub3 will receive this message