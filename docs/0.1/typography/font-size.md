# Font Size
### Utilities for controlling the font size of the text.
|Class|Properties|
|-|-|
|text-xs|fontSize: 12|
|text-sm|fontSize: 14|
|text-base|fontSize: 16|
|text-lg|fontSize: 18|
|text-xl|fontSize: 20|
|text-2xl|fontSize: 24|
|text-3xl|fontSize: 30|
|text-4xl|fontSize: 36|
|text-5xl|fontSize: 48|

### Usage
Control the font size of the text using the `text-{size}`utilities.

<snack-preview snack-name="font-size" />

### Disabling
If you don't plan to use the `text-{size}` utilities in your project, you can disable them entirely by removing the `textSizes` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   textSizes: {
-     prefix: 'text',
-     propertyName: 'fontSize'
-   }
  }
}
```