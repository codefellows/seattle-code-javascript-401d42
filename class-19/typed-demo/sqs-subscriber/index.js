'use strict';

const { Consumer } = require('sqs-consumer');

const app =  Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/Packages',
  handleMessage: handleMessage,
});

function handleMessage(message) {
  console.log(message.Body);
}

app.on('error', (err) => {
  console.error(err);
});

app.on('processing_error', (err) => {
  console.error(err);  
});

app.start();
