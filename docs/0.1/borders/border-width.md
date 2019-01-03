# Border Width
### Utilities for controlling the width an element's borders.

Add borders to any element using the `border{-side?}{-width}` syntax.

For example, `border` would add a `1px` border to all sides of the element, where `border-b-4` would add a `4px` border to the bottom of the element.


|Class|Side (optional)|Width|
|-|-|-|
|`border`|`t` Top <br> `b` Bottom <br> `l` Left <br> `r` Right <br> `x` Left & Right <br> `y` Top & Bottom| `0` <br> `1` (default) <br> `2` <br> `4` <br> `8`|

<snack-preview snack-name="border-width" />

### Customizing
By default BinStorm provides five border width size with all side utilities. You can change, add, or remove these by editing the borderRadius section of your BinStorm config.

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
If you don't plan to use the `border{-side?}{-width}` utilities in your project, you can disable them entirely by removing the `borderWidths` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   borderWidths: {
-     prefix: 'border',
-     propertyName: 'borderWidth'
-      sides: {
-        '-l': 'left',
-        '-r': 'right',
-        '-t': 'top',
-        '-b': 'bottom',
-        '-x': ['left', 'right'],
-        '-y': ['top', 'bottom']
-     }
-   }
  }
}
```