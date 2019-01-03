---
home: true
heroImage: /assets/images/logo.svg
actionText: Read documentation →
actionLink: /0.1/
footer: MIT Licensed | Powered by BinBytes
---

- Install the package via `npm`.

```bash
npm install -g binstorm
```

- Initilize via `init` command.

```bash
binstorm init
```

- Import `apply` method from generated `styles` file.

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