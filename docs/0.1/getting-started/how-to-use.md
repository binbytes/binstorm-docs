# How to Use

### How to apply for Inline style in React Component

For use BinStorm style in your screen, You need to import `apply` method from `styles.js` from generated `theme` folder.

```js
import { apply } from './theme/styles.js'
```

For apply style to React Native component

```js
<Text style={apply('text-red text-lg')}> Hello World </Text>
```

### Extend your existing style with BinStorm

For extend your existing style with BinStorm, First you need to import `apply` method from `theme/styles.js`

Here is an example for extending existing style

```js
import { apply } from './theme/styles.js'

//...

const styles = StyleSheet.create({

  //...

  container: {
    ...apply('bg-grey p-4 justify-center'),
    alignItems: 'center'
  }

  //...

})

//...
```