var amqp = require('amqp');
var connection = amqp.createConnection({ host: "rabbit", port: 5672 });

connection.on('ready', function () {
  console.log('connected to rabbitMQ');
});

console.log('Testing node app on docker rabbit:');

