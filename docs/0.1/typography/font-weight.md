# Font Weight
### Utilities for controlling the font weight of the text.

|Class|Properties|
|-|-|
|font-hairline|fontWeight: '100'|
|font-thin|fontWeight: '200'|
|font-light|fontWeight: '300'|
|font-normal|fontWeight: '400'|
|font-medium|fontWeight: '500'|
|font-semibold|fontWeight: '600'|
|font-bold|fontWeight: '700'|
|font-extrabold|fontWeight: '800'|
|font-black|fontWeight: '900'|

### Usage
Control the font weight of the text using the `font-{weight}`utilities.

<snack-preview snack-name="font-weight" />

### Disabling
If you don't plan to use the `font-{weight}` utilities in your project, you can disable them entirely by removing the `fontWeights` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   fontWeights: {
-     prefix: 'font',
-     propertyName: 'fontWeight'
-   }
  }
}
```