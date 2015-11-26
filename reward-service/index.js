var amqp = require('amqplib');
var connect = amqp.connect("amqp://rabbit", {
  noDelay: true
});

connect.then(function (conn) {
  console.log('Reward service connected to rabbitMQ');
}, function(err) {
  console.error("Error: ", err);
});

console.log('Reward service up...');

