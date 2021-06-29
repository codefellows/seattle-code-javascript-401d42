# Class 11: Event Driven Programming

## Feedback Results

* This last week folks are feeling pretty good overall.
* More feedback / advice / mentorship.
  * End of the week lab, I will Code Review.
  * Take any feedback salt, probably not black and white advice.
* More Jacob in Remo.
  * 2 - 3 hours a day.
  * This week, starting 1 on 1s.

## Warm Up

* Creating a forwards and backwards navigation features.
* Why 2 stacks?
  * One for going backwards
  * Another for going forwards.

## Programming with Events

What are Events?

* Something happens and one or more things respond.
* This is a way to describe things that happen in broad sense with our application.
  * element.addEventListener('hover', run-a-callback);
  * express has HTTP events
    * app.get('/users', fetchUsers);
* What's changing this week is multiple machines will respond.

### Publishers and Subscribers

* Clients don't get an immiediate response from servers.
* Servers don't always respond directly to clients.
* Instead we have publishers and subscribers
  * Publisher can also be a subscriber.
  * A machine `subscribes` to differenet events, and `publishes` to the same or completely seperate events.

* Let's use the human body as a system for publishing and subscribing to events:
  * 


## Node Event Emitter / CAPS
