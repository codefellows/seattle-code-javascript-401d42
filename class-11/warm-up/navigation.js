'use strict';

let currentUrl = null;
// stack 1
let history = [];
// stack 2
let revisionHistory = [];

function fetch(url) {
  currentUrl = url;
  history.push(url); // adding this to our stack of visited urls
  return {
    url: url,
    response: {
      text: 'loading...',
      data: 'loading...', 
    },
  }
}


function backwards() {
  let lastURL = history.pop();
  // what does this mean to our algorithm?
  //  Our current
  if (currentURL === lastURL) {
    revisionHistory.push(lastURL);
    currentURL = lastURL.next;
  }
}

fetch('www.google.com');
