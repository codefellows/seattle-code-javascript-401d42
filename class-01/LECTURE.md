# Class 01: Node / TDD Workflow

## Introduction

* Name / pronunciation
* Favorite Code 301 topic?

## Course Overview

* Everyday:
  * Reading: Due by the start of lecture for that class number
    * ex: class 02 reading is due before lecture for class-02.
  * Code Challenges: very similar to 301.
    * solve a challenge and get tests to pass.
    * each Thursday, technical wock whiteboard in pairs.
      * Spend a half hour on solving the problem with a whiteboard.
  * Labs: submit something by midnight.
  * Learning Journal: reflection on what you'eve learned, what went well, what was hard.
* Every Week:
  * Career Coaching Workshop
    * Technical whiteboard workshop.
    * As a group, breakout room sessions.
  * Data Structure and Alogorithms.
    * Linked Lists
    * Trees
    * Graphs
    * Hash Tables

## Workflow

* Forking Class Repo.
  * Adding upstream: `git remote add upstream https://github.com/codefellows/seattle-code-javascript-401d42.git`
  * fetch published changes: `git pull upstream main`
* Labs:
  * Create a new Repo
  * Clone repo to your machine
  * Add config files ( continuous development cycle )
    * eslint : spell check (code styling is consistent).
    * gitignore : tells github what to ignore, files we don't want published.
      * Depends on where our code is running.
    * test files : files that run our in a test environment.
    * github actions : continuous integration,  runs tests automatically / deploys automatically.
  * Commit to main / create a branch for development.

## Node / TDD (test driven development)

Demo: http://github.com/jacobknaack/class-01-demo

* Modularity:
  * Node lets us access our file system and bring in dependences we have installed locally
    * `npm install express` - installing the code in our `node_modules` folder.
  * We can create our own code dependencies and export them with commonJS syntax:
    *  `module.exports = class Person {};`

* Tests:
  * We can validate our code by installing software that allows us to run our code in test environment
  * We are using `jest` as our test running software, which will look for files saved as tests.

## Lab 01 / Code Challenge 01
