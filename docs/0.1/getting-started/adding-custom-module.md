# Adding Custom Module

For adding custom module in your configration you need to add new key in `module.export` & `modules`.

```js
//...

module.export = {
  //...

  fl: {
    '0': 0,
    '1': 1,
    '1/2': 0.5,
    '1.4': 0.25
  }

  //...

  modules: {
    fl: {
      prefix: 'f',
      propertyName: 'flex'
    }
  }
}
```

It will generate style like this : 

```js
//...

'f-0': { flex: 0 },
'f-1': { flex: 1 },
'f-1/2': { flex: 0.5 },
'f-1/4': { flex: 0.25 },

//...
```