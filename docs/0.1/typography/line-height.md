# Line Height
### Utilities for controlling the leading (line height) of the text.

|Class|Properties|
|-|-|
|leading-none|lineHeight: 16|
|leading-tight|lineHeight: 20|
|leading-normal|lineHeight: 24|
|leading-loose|lineHeight: 32|


### Usage
Control the line height of the text using the `leading-{size}` utilities.

<snack-preview snack-name="leading" />

### Disabling
If you don't plan to use the `leading-{size}` utilities in your project, you can disable them entirely by removing the `leading` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   tracking: {
-     prefix: 'leading',
-     propertyName: 'lineHeight'
-   }
  }
}
```