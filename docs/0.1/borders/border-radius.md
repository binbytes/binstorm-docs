# Border Radius
### Utilities for controlling the border radius of an element.
|Class|Properties|
|-|-|
| rounded-none |  borderRadius: 0  |
| rounded-t-none |  borderTopLeftRadius: 0 <br> borderTopRightRadius: 0  |
| rounded-l-none |  borderTopLeftRadius: 0 <br> borderBottomLeftRadius: 0  |
| rounded-r-none |  borderTopRightRadius: 0 <br> borderBottomRightRadius: 0  |
| rounded-b-none |  borderBottomRightRadius: 0 <br> borderBottomLeftRadius: 0  |
| rounded-tl-none |  borderTopLeftRadius: 0  |
| rounded-tr-none |  borderTopRightRadius: 0  |
| rounded-bl-none |  borderBottomLeftRadius: 0  |
| rounded-br-none |  borderBottomRightRadius: 0  |
| rounded-sm |  borderRadius: 2  |
| rounded-t-sm |  borderTopLeftRadius: 2 <br> borderTopRightRadius: 2  |
| rounded-l-sm |  borderTopLeftRadius: 2 <br> borderBottomLeftRadius: 2  |
| rounded-r-sm |  borderTopRightRadius: 2 <br> borderBottomRightRadius: 2  |
| rounded-b-sm |  borderBottomRightRadius: 2 <br> borderBottomLeftRadius: 2  |
| rounded-tl-sm |  borderTopLeftRadius: 2  |
| rounded-tr-sm |  borderTopRightRadius: 2  |
| rounded-bl-sm |  borderBottomLeftRadius: 2  |
| rounded-br-sm |  borderBottomRightRadius: 2  |
| rounded |  borderRadius: 4  |
| rounded-t |  borderTopLeftRadius: 4 <br> borderTopRightRadius: 4  |
| rounded-l |  borderTopLeftRadius: 4 <br> borderBottomLeftRadius: 4  |
| rounded-r |  borderTopRightRadius: 4 <br> borderBottomRightRadius: 4  |
| rounded-b |  borderBottomRightRadius: 4 <br> borderBottomLeftRadius: 4  |
| rounded-tl |  borderTopLeftRadius: 4  |
| rounded-tr |  borderTopRightRadius: 4  |
| rounded-bl |  borderBottomLeftRadius: 4  |
| rounded-br |  borderBottomRightRadius: 4  |
| rounded-lg |  borderRadius: 8  |
| rounded-t-lg |  borderTopLeftRadius: 8 <br> borderTopRightRadius: 8  |
| rounded-l-lg |  borderTopLeftRadius: 8 <br> borderBottomLeftRadius: 8  |
| rounded-r-lg |  borderTopRightRadius: 8 <br> borderBottomRightRadius: 8  |
| rounded-b-lg |  borderBottomRightRadius: 8 <br> borderBottomLeftRadius: 8  |
| rounded-tl-lg |  borderTopLeftRadius: 8  |
| rounded-tr-lg |  borderTopRightRadius: 8  |
| rounded-bl-lg |  borderBottomLeftRadius: 8  |
| rounded-br-lg |  borderBottomRightRadius: 8  |
| rounded-full |  borderRadius: 300  |
| rounded-t-full |  borderTopLeftRadius: 300 <br> borderTopRightRadius: 300  |
| rounded-l-full |  borderTopLeftRadius: 300 <br> borderBottomLeftRadius: 300  |
| rounded-r-full |  borderTopRightRadius: 300 <br> borderBottomRightRadius: 300  |
| rounded-b-full | borderBottomRightRadius: 300 <br> borderBottomLeftRadius: 300 |
| rounded-tl-full |  borderTopLeftRadius: 300  |
| rounded-tr-full |  borderTopRightRadius: 300  |
| rounded-bl-full |  borderBottomLeftRadius: 300  |
| rounded-br-full |  borderBottomRightRadius: 300 |


### Usage
Use the .rounded-sm, .rounded, or .rounded-lg utilities to apply different border radius sizes to an element.

<snack-preview snack-name="border-radius" />

### Customizing
By default BinStorm provides five border radius size utilities. You can change, add, or remove these by editing the borderRadius section of your BinStorm config.

```js{7,10}
  {
    // ...
    borderRadius: {
      'none': '0',
  -   'sm': '.125rem',
  -   'default': '.25rem',
  +   'default': '4px',
  -   'lg': '.5rem',
  -   'full': '9999px',
  +   'large': '12px',
    }
  }
```

### Disabling
If you don't plan to use the `rounded-{size}` utilities in your project, you can disable them entirely by removing the `borderRadius` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   borderRadius: {
-     prefix: 'rounded',
-     propertyName: 'borderRadius',
-     sides: {
-       '-t': ['top-left', 'top-right'],
-       '-l': ['top-left', 'bottom-left'],
-       '-r': ['top-right', 'bottom-right'],
-       '-b': ['bottom-right', 'bottom-left'],
-       '-tl': 'top-left',
-       '-tr': 'top-right',
-       '-bl': 'bottom-left',
-       '-br': 'bottom-right'
-     }
-   }
  }
}

```
