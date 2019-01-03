# Height
### Utilities for setting the height of an element

|Class|Property|
|-|-|
| h-1 |  height: 4  | 
| h-2 |  height: 8  | 
| h-3 |  height: 12  | 
| h-4 |  height: 16  | 
| h-5 |  height: 20  | 
| h-6 |  height: 24  | 
| h-8 |  height: 32  | 
| h-10 |  height: 40  | 
| h-12 |  height: 48  | 
| h-16 |  height: 64  | 
| h-24 |  height: 96  | 
| h-32 |  height: 128  | 
| h-48 |  height: 192  | 
| h-64 |  height: 256  | 
| h-px |  height: 1  | 
| h-1/2 |  height: '50%'  | 
| h-1/3 |  height: '33.33333%'  | 
| h-2/3 |  height: '66.66667%'  | 
| h-1/4 |  height: '25%'  | 
| h-3/4 |  height: '75%'  | 
| h-1/5 |  height: '20%'  | 
| h-2/5 |  height: '40%'  | 
| h-3/5 |  height: '60%'  | 
| h-4/5 |  height: '80%'  | 
| h-1/6 |  height: '16.66667%'  | 
| h-5/6 |  height: '83.33333%'  | 
| h-full |  height: '100%'  | 

### Customizing
By default BinStorm provides 15 fixed height utilities & 12 percentage-based utilities. You change, add, or remove these by editing the height section of your BinStorm config.

```js{6}
{
  //...

    height: {
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
    'full': '100%',
  }
  //...
}
```

### Disabling
If you don't plan to use the `h-{size}` utilities in your project, you can disable them entirely by removing the `height` property in the `modules` section of your config file:

```js
{
  // ...
  modules: {
    // ...
-   height: {
-     prefix: 'h',
-     propertyName: 'height',
-   }
  }
}
```