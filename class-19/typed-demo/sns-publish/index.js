'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:pickup';

const payload = {
  Message: `{"name": "Jacob"}`,
  TopicArn: topic,
}

sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
