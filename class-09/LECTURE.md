# Class 09: Final Auth Project

## Review Auth Services

* Basic Authentication: username password (strings)
  1. base64 encode (18tyhjabsf7a)
  2. what part of the request contains the encoded string?
     1. get's sent through the request.headers in an `Authorization` object.
* Bearer Authentication (token based)
  * Once you have signed in, the User model can issue a token
* Creating a User Module with authentication functions
  * authBasic: decodes the base64 encoded, compare the decoded (normal unencrypted) password with the encrypted password from the database.
    * bcrypt compares plain password to encrypted string.
  * authBearer
  * Token:  jsonwebtoken, contained encoded user info, and is signed with a `SECRET`.
    * Secret is like a 'key' for an object.
      * when we `sign` the token, we add our encoded to a list that jsonwebtoken manages for us.
      * when we `verify`, jsonwebtoken looks up our list of tokens, and checks if the verified token is there.
  * Capabilities / Role (Permissions):
    * Specific a role when we create the User (this is specified on POST /signup)
    * roles type, specifices a list of capabilities in our Virtual field.
      * create an object literal, keys are role types, and values are a list of capabilities.
      * VIRTUAL field function maps the role to the list of capabilities and returns them.
* Access Control List (Authorize)
  * Middleware function gets a 'capabililty'
    * validates capabilites with the User model.

## Final Week Assignment

* Make a version of thunderclient that runs in the command line
  * `cliclient get http://localhost:3000` => GET http://localhost:3000/
* You can use React to create a simple Interface for your application.
  * Perform some CRUD on at most 2 resources.
    * Creating Notes / reminders.
    * Simple CMS.
      * Users might be abe to only read things
      * Writers can add new articles
        * aritcle data model look like (content, author, title)
  * Something that validates markdown.
