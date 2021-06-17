# Class 05: Data Modeling wih SQL

## Warm Up

Shredder library: `.reduce` Method

* Takes in an array / object, function, and initial value.
* The function should update the value for every item in the array.
* return the modified value.

* Tim: unclear as to the end gaol

`let arr = [2,4,5,6]`
`arr.reduce(function, accumulator)`

* takes an arr and reduces it to one value.


## Code Review

* Tests
* Express Routing and Middleware
* Sequelize
  * Our gateway to SQL

## Data Modeling

NoSQl (Mongo) vs SQL (Postgres)

* noSQL is document based
* dynamoDB is document

SQL is relational, meaning that is a data object is related to another:

* Make that relation formal, and you can't remove relations that belong to related entities.
* Easily find related entities by using SQL queries.
* Organize by `Primary KEY` and `foreign KEY`
  * `Primary key` is a unique value used to keep tablur data entities seperate.
  * `Foreign key` is value that points to column in a another table.

Types of Relationships

* One to Many: one entities (table) has one or more of another entity (from another table).
* One to One: Person and a Passport
* Many to Many: Many table rows are related to many rows in another table, and vice versa.

## Collection Class

See `typed demo` folder!
