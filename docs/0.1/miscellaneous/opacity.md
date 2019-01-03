# Opacity
### Utilities for controlling the opacity of an element.

|Class|Property|
|-|-|
| opacity-0 | opacity: 0 |
| opacity-25 | opacity: 0.25 |
| opacity-50 | opacity: 0.50 |
| opacity-75 | opacity: 0.75 |
| opacity-100 | opacity: 1 |

### Example
<snack-preview snack-name="opacity" />

### Customizing
By default BinStorm provides five opacity utilities based on a simple numeric scale. You change, add, or remove these by editing the opacity section of your BinStorm config.

```js{8-16}
{
  // ...
  opacity: {
    '0': 0,
-   '25': .25,
-   '50': .5,
-   '75': .75,
+   '10': .1,
+   '20': .2,
+   '30': .3,
+   '40': .4,
+   '50': .5,
+   '60': .6,
+   '70': .7,
+   '80': .8,
+   '90': .9,
    '100': 1,
  }
}
```

### Disabling
If you don't plan to use the `opacity-{value}` utilities in your project, you can disable them entirely by removing the `opacity` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   opacity: {
-     prefix: 'opacity',
-     propertyName: 'opacity',
-   }
  }
}
```