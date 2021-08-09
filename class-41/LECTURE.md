# Class 41: React Native

## Announcements

* Whiteboards have begun.  Look out for slack messages from me about when interviews will happen.
* Last week of course content.
  * Resubmissions / late submissions will be cuttoff (sort of) on Sunday.
* Open Source Contributions.
* This week should feel lighter.

## Warm Up

* Given a Array, Find the minimum value ... Recursively.
Class Whiteboard: https://projects.invisionapp.com/freehand/document/a14poNZ21

## Mobile Application Development

* Native Software development (particularly for mobile).
  * In the browser we don't have native code
    * Chrome / your browser is the thing that is interfacing with you computer.
      * Our JS that runs in the browsert is dynamic.
  * The Elements that make up a UI in Native Code are already preprogrammed, we just need to import them and configure.
    * This will cause some frustration as we can no longer be as "dynamic" with code running natively vs code running in the browser.

* Running Applications while developing
  * Run either on your device, or in a device emulator (Xcode, Android Studio).

## React Native with Expo

1) Install the expo-cli: `npm install -g expo-cli`
2) Create a new project managed by expo: `expo init <project-name> --npm`
3) Run the expo project manager in your terminal
   1) `cd <project-name>`
   2) `npm start`
4) Choose which environment you are runnning by clicking on the option in the metro bundler application:
   1) run in ios
   2) run in android studio
   3) run in web browser
   4) Run on device by scanning QR code.s

Installing Something new?

`npm install <new-thing>` becomes `expo install <new-thing>`


