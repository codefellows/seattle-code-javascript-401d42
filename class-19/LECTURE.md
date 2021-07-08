# Class 19: SNS (Simple Notification Service) and SQS (Simple Queue Service)

## Announcements

* Project week:
  * Starts tomorrow: Kickoff
  * Project Prep assignments will be worked on tomorrow during the day.

## Warm Up

* Creating a Hamburger Menu
  * Markup
  * CSS
    * optional JS.
* How does your hamburger menu work?
* Louis: 
  * Alex: React Bootstrap:
    * We have a header, that contains a `Navbar` automagically resizes.
  * Tek:
    * Trigger the dropdown menu with display of none
      * chekc input for toggle.
    * Use negaive margin so that content is hidden until

## Code Review

* Roles / Cloudwatch
* API Gateway + Dynamo DB
  * Issue with the post:
    * Pushing zip files to Lambda functions is diffucult.
    * Figuring out how to deal with a request body.
  * Jacob's better way:
    * Push to a repo:
    * That code get's added to an s3 bucket.
    * And then setup a lambda to use src cod from that bucket.
* Check, Lambda proxy integration to get information about the request on the `event` parameter.

## Events with AWS

these services have simple in there name for a reason, they are highly stadnardized and highly configurable. Events have one job, sending motifications to any subscriber, while the queue, just maintains a storage conainer of messages.

### SNS

* Functions via a `topic`: this would be and event in socket.io
* Broadcast messages to a large number of clients (any client machine that is a subscriber).

### SQS

* Our message management system, much like our MessageQueue` class
  * can be configured using FiFo ordering,  or 'standard' any client can get messages in any order.
* Benefit: gaurantees delivery of messages
* Con: message are read by a single consumer, not all clients.

### DEMO: Subscribing and publishing events and messages

1. Create an SNS topic
   1. Create a new Lambda function that can handle and SNS event
2. Add your newly created Lambda function as a subscriber to the SNS topic.
3. Publish an SNS message from node;
   1. Ensure that your user has `FullSQSPermissions` policy attached to the IAM role assigned to your AWS user.
   2. Use the following code to publish an event:

      ```javascript

      const AWS = require('aws-sdk');
      AWS.config.update({ region: 'us-west-2' });

      const sns = new AWS.SNS();

      const topic = 'YOUR AWS SNS TOPIC ARN';

      const payload = {
        Message: 'Hello from node',
        TopicArn: topic,
      }

      sns.publish(payload).promise()
        .then(data => {
          console.log(data);
        })
        .catch(console.error);

      ```

4. Check your Lambda function logs to make sure your event was picked up.
