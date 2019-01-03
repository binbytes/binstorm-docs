# Width
### Utilities for setting the width of an element

|Class|Property|
|-|-|
| w-1 |  width: 4  | 
| w-2 |  width: 8  | 
| w-3 |  width: 12  | 
| w-4 |  width: 16  | 
| w-5 |  width: 20  | 
| w-6 |  width: 24  | 
| w-8 |  width: 32  | 
| w-10 |  width: 40  | 
| w-12 |  width: 48  | 
| w-16 |  width: 64  | 
| w-24 |  width: 96  | 
| w-32 |  width: 128  | 
| w-48 |  width: 192  | 
| w-64 |  width: 256  | 
| w-px |  width: 1  | 
| w-1/2 |  width: '50%'  | 
| w-1/3 |  width: '33.33333%'  | 
| w-2/3 |  width: '66.66667%'  | 
| w-1/4 |  width: '25%'  | 
| w-3/4 |  width: '75%'  | 
| w-1/5 |  width: '20%'  | 
| w-2/5 |  width: '40%'  | 
| w-3/5 |  width: '60%'  | 
| w-4/5 |  width: '80%'  | 
| w-1/6 |  width: '16.66667%'  | 
| w-5/6 |  width: '83.33333%'  | 
| w-full |  width: '100%'  | 

### Customizing
By default BinStorm provides 15 fixed width utilities & 12 percentage-based utilities. You change, add, or remove these by editing the width section of your BinStorm config.

```js{6}
{
  //...

    width: {
    'px': '1px',
+   '2px': '2px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
-   '10': '2.5rem',
-   '12': '3rem',
-   '16': '4rem',
-   '24': '6rem',
-   '32': '8rem',
-   '48': '12rem',
-   '64': '16rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '5/6': '83.33333%',
    'full': '100%'
  }

  //...
}
```

### Disabling
If you don't plan to use the `w-{size}` utilities in your project, you can disable them entirely by removing the `width` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   width: {
-     prefix: 'w',
-     propertyName: 'width',
-   }
  }
}
```