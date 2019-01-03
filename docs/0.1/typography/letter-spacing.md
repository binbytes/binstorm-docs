# Letter Spacing
### Utilities for controlling the tracking (letter spacing) of the text.

|Class|Properties|
|-|-|
|tracking-tight|letterSpacing: -0.8|
|tracking-normal|letterSpacing: 0|
|tracking-wide|letterSpacing: 0.8|

### Usage
Control the letter spacing of the text using the `tracking-{size}` utilities.

<snack-preview snack-name="tracking" />

### Disabling
If you don't plan to use the `tracking-{size}` utilities in your project, you can disable them entirely by removing the `tracking` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   tracking: {
-     prefix: 'tracking',
-     propertyName: 'letterSpacing'
-   }
  }
}
```
