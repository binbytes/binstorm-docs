# Min-Height
### Utilities for setting the minimum height of an element

|Class|Property|
|-|-|
| min-h-0 |  minHeight: 0  |
| min-h-full |  minHeight: '100%' |

### Customizing
By default BinStorm provides 2 minHeight. You change, add, or remove these by editing the height section of your BinStorm config.

```js{6}
{
  //...

  minHeight: {
    '0': 0,
+   '1/2': '50%',  
    'full': '100%'
  }

  //...
}
```

### Disabling
If you don't plan to use the `min-h-{size}` utilities in your project, you can disable them entirely by removing the `minHeight` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   minHeight: {
-     prefix: 'min-h',
-     propertyName: 'minHeight',
-   }
  }
}
```