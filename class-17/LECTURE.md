# Class 17: AWS s3 and Lambda Functions

## Warm Up

[See class whiteboard](https://projects.invisionapp.com/freehand/document/fFRMGbuNB)

## Code Review

* EC2???
  * Allows someone to rent out virtual computing hardware.
  * As the developer we can tell the computer what to do.
* Elastic Beanstalk??
  * Virtual software, for creating and scaling 'Web Applications'.
  * It has configuration settings for operating sytem, runtime environments, hypervisor software, etc.
    * We tell our elastic beanstalkl app, where the source should come from:
      * Zip file uploaded via a GUI.
        * take all of the source code / excluding all `build artifacts`, and zip it up.
          * nodes_modules
          * package-lock.json
        * Make sure to include the `package.json`.
          * Let elastic beanstalk / ec2 know what dependencies.
          * execution scripts 'npm start', 'npm test'.
      * CLI that does this via a command.
  * Environments?
    * This architecture > language
      * runtime environment
      * environment variebles.
    * Provisions our EC2 instance with the things that are required for the hardware.

## S3

Simple Storage Service:  analogous to github,  marketed towards images, videos, large files.

* Cloud based directory system.
* This is not a database
  * what do databases store?  
    * Stores data? Difference between `file` and `data`
      * data: strings / numbers / bytes / intergers /
        * atomic / scalar.
  * file storage /repositories store whole files.
    * larger amounts of more varied information.
  * Can have public or private access
    * When might we need to open up our bucket to anything?

Want to make public:

attach the following policy to your bucket:

```json

{
  "Version": "2008-10-17",
  "Statement": [{"Sid": "AllowPublicRead",
    "Effect": "Allow",
    "Principal": {
      "AWS": "*"
    },
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
}]}

```

## Lambda

Highly targeting `micro` server functions.

* a single function that run whenever we as he developers want.
* Should have one specific job.
* Programmtically accessed through AWS.

If you want to get your lambda to make changes to another service:

1. Click Configuration for your lambda function
2. Select the role associated with your lambda, 
   1. Role details should appear: click `attach  policy`
   2. Search for the AWS product you would like to permit
   3. Click checkbox next to appropriate policy
   4. click `attack policy` at the bottom.

### DEMO: Image Upload lambda

```javascript

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    console.log(event.Records[0].s3.bucket.name);
    console.log(event.Records[0].s3);
    
    // name for the S3 bucket
    let bucketName = event.Records[0].s3.bucket.name;
    // name of the file associated with the event (uploaded image name)
    let srcKey = event.Records[0].s3.object.key;
    
    const newImage = await s3.putObject({
        Bucket: bucketName,
        Key: `test.json`,
        Body: '{"test": "test"}'
    }).promise();
    
    console.log(newImage);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

```
