# Padding & Margin
### Utilities for controlling an element's padding and margin.

Control an element's padding and margin using the `p{side?}-{size}` and `m{side?}-{size}` utilities.

For example, `pt-2` would add `8` of padding to the top of the element, `mx-0` would make the horizontal margin zero.

|Class|Side (optional)|Space|
|-|-|-|
|`p` padding <br> `m` margin|`t` Top <br> `b` Bottom <br> `l` Left <br> `r` Right <br> `x` Left & Right <br> `y` Top & Bottom| `px` - 1 <br> `0` - 0 <br> `1` - 4 <br> `2` - 8 <br> `3` - 12 <br> `4` - 16 <br> `5` - 20 <br> `6` - 24 <br> `8` - 32 <br> `10` - 40 |

### Customizing
By default BinStorm provides nine space size for padding & margin utilities. You can change, add, or remove these by editing the flex section of your BinStorm config.

```js{13,27}
{
  // ...
  padding: {
    'px': 1,
    '0': 0,
    '1': 4,
    '2': 8,
  - '3': 12,
  - '4': 16,
  - '5': 20,
  - '6': 24,
    '8': 32,
  + '9': 36,
    '10': 40,
  },
  // ...
  margin: {
    'px': 1,
    '0': 0,
    '1': 4,
    '2': 8,
  - '3': 12,
  - '4': 16,
  - '5': 20,
  - '6': 24,
    '8': 32,
  + '9': 36,
    '10': 40,
  }
}
```

### Disabling
If you aren't using the `p{side?}-{size}`, or `m{side?}-{size}` utilities in your project, you can disable them entirely by remove the `margin` and `padding` property from the `modules` section of your config file:

```js
{
    // ...
    modules: {
        // ...
  - margin: {
  -   prefix: 'm',
  -   propertyName: 'margin',
  -   sides: {
  -     l: 'left',
  -     r: 'right',
  -     t: 'top',
  -     b: 'bottom',
  -     x: ['left', 'right'],
  -     y: ['top', 'bottom']
  -   }
  - },
  - padding: {
  -   perfix: 'p',
  -   propertyName: 'padding',
  -   sides: {
  -     l: 'left',
  -     r: 'right',
  -     t: 'top',
  -     b: 'bottom',
  -     x: ['left', 'right'],
  -     y: ['top', 'bottom']
  -   }
  - }
  }
}
```