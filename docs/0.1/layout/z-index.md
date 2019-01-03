# Z-Index

### Utilities for controlling the stack order of an element.

|Class|Properties|
|-|-|
|z-0|zIndex: 0|
|z-10|zIndex: 10|
|z-20|zIndex: 20|
|z-30|zIndex: 30|
|z-40|zIndex: 40|
|z-50|zIndex: 50|

### Usage
Control the stack order (or three-dimensional positioning) of an element in BinStorm, regardless of order it has been displayed, using the z-{index} utilities

<snack-preview snack-name="z-index" />

### Customizing
By default BinStorm provides six numeric `z-{index}` utilities. You change, add, or remove these by editing the `zIndex` section of your BinStorm config.

```js{10-13}
{
  // ...
  zIndex: {
    '0': 0,
-   '10': 10,
-   '20': 20,
-   '30': 30,
-   '40': 40,
-   '50': 50,
+   '25': 25,
+   '50': 50,
+   '75': 75,
+   '100': 100
  }
}
```

### Disabling
If you don't plan to use the `zIndex` utilities in your project, you can disable them entirely by removing the `zIndex` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   zIndex: {
-     prefix: 'z',
-     propertyName: 'zIndex'
-   }
  }
}
```