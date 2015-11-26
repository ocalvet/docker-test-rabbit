var amqp = require('amqplib');
var connect = amqp.connect("amqp://rabbit", {
  noDelay: true
});

var channel;
var ex = 'logs';

connect.then(function (conn) {
    console.log('Reward service connected to rabbitMQ');
    return conn.createChannel();
  }, function(err) {
    console.error("Error: ", err);
  })
  .then(function(ch) {
    
    channel = ch;

    ch.assertExchange(ex, 'fanout', {durable: false});
  
    return ch.assertQueue('', {exclusive: true});
  })
  .then(function(q) {
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
    channel.bindQueue(q.queue, ex, '');

    channel.consume(q.queue, function(msg) {
      console.log(" [x] %s", msg.content.toString());
    }, {noAck: true});
  });

console.log('Reward service up...');

