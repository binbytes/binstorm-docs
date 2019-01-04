# How to Run

When you use `init` command in your project root directorty for initialization. It's automatically configure your `package.json` for running on Android & iOS.

- You can run project on Android by `npm run dev-android` command.
- You can run project on iOS by `npm run dev-ios` command.

It will add following `scripts` in your `package.json`

```json

{
//...
  "scripts": {
    //..
    "dev-android": "binstorm re-style && react-native run-android",
    "dev-ios": "binstorm re-style && react-native run-ios"
  }
//..
}

```