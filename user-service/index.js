var amqp = require('amqplib');
var connect = amqp.connect("amqp://rabbit");

connect.then(function (conn) {
  console.log('User service connected to rabbitMQ');
}, function(err) {
  console.error("Error: ", err);
});

console.log('User service up...');

