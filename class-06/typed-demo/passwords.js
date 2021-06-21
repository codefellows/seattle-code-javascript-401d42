'use strict';

const base64 = require('base-64'); // encoding library
const bcrypt = require('bcrypt'); // encryption libaryr

// encoding just allows our inputs to adhere to a consistent format,  base64 auth headers are a convention that's been used for a while

let username = 'Jacob';
let password = 'supersecret';

let basicAuthString = base64.encode(`${username}:${password}`); // this is not here to hide the info, just allow a consistent format for auth servers.

console.log(basicAuthString);

let decodedString = base64.decode(basicAuthString);
console.log(decodedString);

// encryption is the hidding of sensitive information from everyone (including ourselves) except the user.
//  NEVER store raw password strings, always encrypt.

// how can we validate that users passwords are valid?

// bcrypt has a method to perform one-way comparison. 
let encryptedPass = null;


bcrypt.hash(password, 10).then(async encryptedPassword => {
  // $2b$10$Te0vsUxBriPKW.BDWjo6EuBbmaxIK6yLyj6t2ppsqaiVsqc4rJu6S
  // $2b$10$MUn6hqDLpSn2cx7oKxde1eK.NYILGrUdbkNvwH.Zv/27vrkSS/fLG
  encryptedPass = encryptedPassword;  // store this in your User's Data
  console.log(encryptedPassword);

  // returns a boolean whether or not our password passed a built in comparison check.
  let isValid = await bcrypt.compare('supersecret', encryptedPass);
  console.log(isValid);
});



