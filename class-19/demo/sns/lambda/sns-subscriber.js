const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:pickup';

exports.handler = async (event) => {
  // TODO implement
  console.log('SNS Event', JSON.stringify(event, undefined, 2));

  const params = {
    TopicArn: topic,
    Protocol: 'http',
  }

  sns.subscribe(params, (err, data) => {
    if(err) console.error(err);
    console.log(data);
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
