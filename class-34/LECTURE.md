# Class 34: API Integration

## Lightening Talk

* Keian will be chatting about GatsbyJS.
  * Gatsby is a Static Site Generator.
  * Great for SEO
    * Why are SPAs not great for SEO?
    * Generates all the content first before we render anything to the end user.
  * JAMStack Technology.

## Code Review

* Auth Context.
  * Implementing the `Auth` Context and 2 auth componenets: Auth and Login.

* Design tools
  * Wireframes.
    * Fullfulling specific goals:
      * Displaying a heading
      * Displaying
      * Pressing buttons
      * filling our inputs.
  * Prototypes.

## API Workshop

* Documenting Features for others.

### Autenticated API Server

#### Features

* Perform CRUD
  * Routes
    * Resources (things that the server gives to the client)?
      * Todos as JSON.
    * RESTful
      * GET /resource => READ
      * POST /resource => CREATE
      * PUT /resource/:id => UPDATE
      * DELETE /resouece/:id => DELETE
  * Models
    * SQL database (or another db if you choose)
    * Schemas: the datatypes that will stored in each column of our SQL Tables.
  * Errors
    * 404 => resource not found
    * 500 => server error
* Authorization / Authentication
  * User
    * Encrypted passwords
    * GenerateToken
    * Authenticate from strings (Basic)
    * Authenticate from token (Bearer)
    * Capabilities (RB-ACL)
