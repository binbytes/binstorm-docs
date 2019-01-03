# Max-Height
### Utilities for setting the maximum height of an element

|Class|Property|
|-|-|
| max-h-xs | maxHeight: 320 |
| max-h-sm | maxHeight: 480 |
| max-h-md | maxHeight: 640 |
| max-h-lg | maxHeight: 800 |
| max-h-xl | maxHeight: 960 |
| max-h-2xl | maxHeight: 1120 |
| max-h-3xl | maxHeight: 1280 |
| max-h-4xl | maxHeight: 1440 |
| max-h-5xl | maxHeight: 1600 |
| max-h-full | maxHeight: '100%' |


### Customizing
By default BinStorm provides ten `max-h-{size}` utilities. You change, add, or remove these by editing the `maxHeight` section of your BinStorm config.

```js{13,14}
{
  // ...
  maxHeight: {
    'xs': 320,
    'sm': 480,
    'md': 640,
    'lg': 800,
    'xl': 960, 
-   '2xl': 1120,
-   '3xl': 1280,
-   '4xl': 1440,
-   '5xl': 1600,
+   '1/2': '50%'
+   '1/4': '25%'
    'full': '100%'
  }
}
```

### Disabling
If you don't plan to use the `max-h-{size}` utilities in your project, you can disable them entirely by removing the `maxHeight` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   maxHeight: {
-     prefix: 'max-h',
-     propertyName: 'maxHeight',
-   }
  }
}
```