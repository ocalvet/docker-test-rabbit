var amqp = require('amqplib');
var connect = amqp.connect("amqp://rabbit");
var ex = 'logs';

function sendMesage(ch, msg) {
  ch.publish(ex, '', new Buffer(msg));
  console.log(" [x] Sent %s", msg);
}

connect
  .then(function (conn) {
    console.log('User service connected to rabbitMQ');
    return conn.createChannel();
  }, function(err) {
    console.error("Error: ", err);
  })
  .then(function(ch) {
      var msg = process.argv.slice(2).join(' ') || 'Hello World!';
      ch.assertExchange(ex, 'fanout', {durable: false});
      setInterval(sendMesage.bind(this,ch, msg), 1000);
  });

console.log('User service up...');

