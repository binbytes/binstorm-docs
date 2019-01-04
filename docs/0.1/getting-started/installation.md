# Installation

## 1. Install via npm
BinStorm available on npm and can be installed using npm

```bash
# globle install (recommanded)
npm install -g binstorm

# local install
npm install --save binstorm
```

## 2. Create BinStorm config and style file

We provide CLI to make easy to configure BinStorm in your project.

```bash
# If you installed it globally
binstorm init

# If you installed it locally
./node_modules/.bin/binstorm init
```


## 3. Use BinStorm in your project

To apply and use BinStorm style in your project, You need to just import generated `theme/styles.js` in your file

```js
import { apply } from './theme/styles.js'
//...
{
    //....
    <View style={apply('bg-grey border rounded-full')}>
        <Text style={apply('text-black text-sm font-bold')}>
        Hello World
        </Text>
    </View>
    //...
}
```