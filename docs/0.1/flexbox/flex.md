# Flex
### Utility for controll flex.

|Class|Properties|
|-|-|
|flex-1|flex: 1|
|flex-1/2|flex: 0.5|
|flex-1/4|flex: 0.25|

### Usage
Control the flex of view using the `flex-{size}` utilities.

<snack-preview snack-name="flex" />

### Customizing
By default BinStorm provides three flex size utilities. You can change, add, or remove these by editing the flex section of your BinStorm config.

```js{7}
{
  // ...
  flex: {
    '1': 1,
-   '1/2': 0.5,
-   '1/4': 0.25,
+   '1/8': 0.125
  }
}
```

### Disabling
If you don't plan to use the `flex-{size}` utilities in your project, you can disable them entirely by removing the `flex` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   flex: {
-     prefix: 'flex',
-     propertyName: 'flex',
-   }
  }
}
```