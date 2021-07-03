# Class 14: Final Week Project / AWS

## 5th of July

* If we take Monday off we lose a day at the end.
  * We will probably shave some of the React Native.
    * Alex: React Native, and it's nice to ge exposed to it here.
    * Tim supports this
    * Dion: work on the fifth as well.
* Please let me know in Slack if you'd like the day off.

## Code Review

Last lab, has us implementing a `Queue` of sorts, seperating message concerns from event concerns.

* Does anyone want to show their lab work!

### Hub Server

### Vendor

### Driver

## Introduce AWS Services

This event server (Socket.io events / Message Queue service) is up on AWS

* SNS (simple notification service)
  * As a user, you can define events.
    * 'pickup' => creates a "topic" on AWS.
      * Set up lamba
      * configure a rest API gateway
      * send a message to a Queue
* SQS (simple queue service)
  * Stores Objects and allows FiLo / FiFo / don't care.
  * Upon reception, SQS clears that message.

## Final Week Lab

We have another open ended lab
* What is a real time application you'd like to build.

Pairs:

* Dion, Louis, Sunny
* Tek, Tyler
* Alex, Keian
* Cullen,  Tim
