# Class 16: Introduce AWS / EC2 and Elastic Beanstalk

## Announcements

Feedback:
* Warm Ups haven't been helpful.
  * I'm going to mix things up a but this week and we'll see if we can change that!

## Warm Up

* Binary Search Trees
  * Finding the smallest and the largest values.
  * Tim: inserting values into the tree?
    * We don't need to modify the tree.
  * Alex: pre-order (traversal) to find the furthest left value, or the furthest most right value.
    * 1) traversing the tree
    * 2) as long as there are values on the left / right, keep traversing left
      * return the last nodes value.
  * Cullen: if we don't know the organization of the tree.
    * If no organzation is known, pick the traversal that makes the most sense to you.

```javascript

function findSmallest(bst) {

  let current = bst.root;

  while(current) {
    if (current.left) {
      current = current.left; 
    } else {
      return current.value;
    }
  }
}

```

## AWS

What is AWS?  Amazon Web Services, what are web services?

* All the products and things that web developers might need in a contemporary web application ecosystem.

## EC2 + Elastic Beanstalk

Cloud Computing?

* What is the cloud really?
  * an abstraction for all the things that computers / programs can do, the cloud provides the hardware for us.
  * Big tech companies have been leveraging these services a lot more in the 10 years or so.
    * It is a standard for how software tech companies.
  * You don't have to maintiain anything physical.

### EC2

* Allows dev to create and use cloud computing hardware.
* Old days companies were bound by their physical hardware and needed to `scale`
  * Either scale `vertically` or `horizontally`.
    * Vertically: adding more hardware resources to a single machine (faster processor, more memory, more storage).
    * Horizontally: more machines to balance the load being asked of a single machine.

CLI:
1. `eb init` : initialize an app only on the CLI.
2. `eb create SOME-ENVIRONMENT-NAME`: Provision an environment on AWS ec2.
3. `eb deploy` - runs our software in the provisioned environemtn.
