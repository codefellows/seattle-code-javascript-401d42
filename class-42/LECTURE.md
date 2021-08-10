# Class 42: React Native Part 2

## Lightening Talk

Alex - Function Currying.

## Code Review

* Styling gets weird?
  * JSS, no more CSS in react native :(
  * Use a third party stylinhg library.
  * Web Components vs Native Components.
    * Browser's don't have native code - everything is dyanamic.
    * Native code is preprogrammed - very prescriptive behaviors.

```javascript
const header = (props) => {

  // all pregrommed text stuff can be configured here
  const styled = Stylesheet.create({});

  return (
    <Text>{props.text}</Text>
  )
}

export default Header;
```

* Bugs / blockers:
  * React Native docs are very broad.
* Connecting your Development build to a "Device".
  * Getting the "emulator" to find your build.

## 3rd Party Component Libraries

* Prestyled and comfigure React components that will allow you build niceer looking things faster.
React Native Elements
* install with expo cli
  * `expo install react-native-elements`

## Building and Publishing

* Expo publish
  * command built into that will place you expo app onto the expo registry.
  * `expo publish`
  * Requirements
    * Make sure you have an expo account.
    * log in to that account.
  * When building make sure you have the following properties set in your `app.json` file:

```json
// ...ios config
"ios": {
  "bundleIdentifier": "com.yourcompany.yourappname",
  "buildNumber": "1.0.0"
},

// ...android config
"android": {
  "package": "com.yourcompany.yourappname",
  "versionCode": 1
}

```
