# Max-Width
### Utilities for setting the maximum width of an element

|Class|Property|
|-|-|
| max-w-xs | maxWidth: 320 |
| max-w-sm | maxWidth: 480 |
| max-w-md | maxWidth: 640 |
| max-w-lg | maxWidth: 800 |
| max-w-xl | maxWidth: 960 |
| max-w-2xl | maxWidth: 1120 |
| max-w-3xl | maxWidth: 1280 |
| max-w-4xl | maxWidth: 1440 |
| max-w-5xl | maxWidth: 1600 |
| max-w-full | maxWidth: '100%' |


### Customizing
By default BinStorm provides ten `max-w-{size}` utilities. You change, add, or remove these by editing the `maxWidth` section of your BinStorm config.

```js{13,14}
{
  // ...
  maxWidth: {
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
If you don't plan to use the `max-w-{size}` utilities in your project, you can disable them entirely by removing the `maxWidth` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   maxWidth: {
-     prefix: 'max-w',
-     propertyName: 'maxWidth',
-   }
  }
}
```