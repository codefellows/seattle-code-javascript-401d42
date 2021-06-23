# Class 08: Authorization / Access Control List

## Warm Up

[Cards and Decks](https://github.com/codefellows/seattle-code-javascript-401d42/tree/main/class-08/warm-up)

## Code Review

* Tests are weird, and the lab had a lot of them.
* See Review folder.

## Access Control List

Authorization: Once I know who you are, are you allowed to do what you are requesting.

* Our system will add a `role` to our user schema, "user", "admin", "writer"
  * We can map a list of permissions, to a specific user `Role`.

```javascript

let acl = {
  "user": ["read"],
  "writer": ["read", "create"],
  "admin": ["read", "create", "update", "delete"]
}

```

* We need to add a role to our model,  we are also will add a virtual to derive capabilites per role.
* Add another middle ware function, that finds a users capabilties and allow authorized acccess, or throw an error when unauthrized.

## Authorization Middleware / User Capabilities

