# Class 30: DSA HashTables

## Overview

A table of key value pairs, indexed by a hash.

## Terminology

* Hash: taking in a some value, and converting to an integer in some deterministica fashion.  meaning the same value will always be converted to the same output. The result of a hashing algorithm.

jacob => 134
chance => 15876

* Bucket: a storage container within the hashtable.  This is our new Node, the structure that stores our value.
* Collisions: When a key hashes to an bucket index that already stores a value.  Good hashtables, allow for mutiple values to be stored at a  given bucket index.
  * We'll be using a linked list as our bucket.

## Hashing

Taking an input and converting to a value deterministically, the goal for us is to create and index value but there are other use cases.  Cryptographic hashing is for security purposes.  Our algorithm is very rudimentary and is just for storage pusposes.

Input: { key: 'Jacob', value: 'instructor' }

We need  to convert the string 'Jacob' into an index.

4 steps:
1. Determine the number of buckets in our table.
  * Typically this is a power of 2.  We'll go with 1024 by convention.
2. Convert the string to it's ascii values.
  * 'J' = 74 'a' = 97 'c' = 99 'o' = 111 'b' = 98  ===> 479
3. Multiply the result by some largish prime number
   * 599 * 479 ===> 286921
4. Take the and modulo by the size our table
   * 286921 % 1024 ===> 201

**The result is  our index value.**

A "perfect" hashing algorithm for storage will never have a collision.  The worst one will always give you the same thing.

We're going to store both key and value together.  Why? So we can handle collisions and search for values by unhashed key.

## Implementation

* Add new values to our table
* Find values in our table
* Method telling the user whether the table contains a key.
* getHash to return the index of a stored key.
