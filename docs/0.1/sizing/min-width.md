# Min-Width
### Utilities for setting the minimum width of an element

|Class|Property|
|-|-|
| min-w-0 |  minWidth: 0  |
| min-w-full |  minWidth: '100%' |

### Customizing
By default BinStorm provides 2 minWidth. You change, add, or remove these by editing the width section of your BinStorm config.

```js{6}
{
  //...

  minWidth: {
    '0': 0,
+   '1/2': '50%',  
    'full': '100%'
  }

  //...
}
```

### Disabling
If you don't plan to use the `min-w-{size}` utilities in your project, you can disable them entirely by removing the `minWidth` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   minWidth: {
-     prefix: 'min-w',
-     propertyName: 'minWidth',
-   }
  }
}
```