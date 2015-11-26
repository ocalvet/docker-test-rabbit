var amqp = require('amqplib');
var connect = amqp.connect("amqp://rabbit");

connect
  .then(function (conn) {
    console.log('User service connected to rabbitMQ');
    return conn.createChannel();
  }, function(err) {
    console.error("Error: ", err);
  })
  .then(function(ch) {
      var ex = 'logs';
      var msg = process.argv.slice(2).join(' ') || 'Hello World!';
      ch.assertExchange(ex, 'fanout', {durable: false});
      ch.publish(ex, '', new Buffer(msg));
      console.log(" [x] Sent %s", msg);
  });

console.log('User service up...');

