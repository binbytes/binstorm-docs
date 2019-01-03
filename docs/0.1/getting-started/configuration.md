# Configuration

### A guide to configuring and customizing your BinStorm installation.

At the heart of BinStorm project is a JavaScript configuration file that serves as the home for your project's design system.

It's where you define your color palette, type scale, border sizes, opacity scale, you name it. Your config file is like an executable style guide for your project.

We provide a sensible default configuration with a very generous set of values to get you started, but you own this file; you're encouraged to change it as much as you need to fit the goals of your design.

## Generating your configuration file

BinStorm CLI do everything for you. You need to just execute command `BinStorm init` in your project root directory.

    # If you installed BinStorm globally
    BinStorm init

    # If you istalled BinStorm locally
    ./node_modules/.bin/BinStorm init

By default it generate `theme` folder in your project root directory. Inside `theme` folder, there are two file generated `config.js` and `styles.js`.

## Default configuration

Your generated configuration file contains all of BinStorm's default configuration values, ready for you to customize.


## Configuration Sections
### Colors

By default, the `colors` property simply references a `colors` variable defined earlier in the file. Using a separate variable for your color palette like this makes it easy to re-use those colors when defining the color palette for individual utilities, like background colors, text colors, or border colors.

```js
var colors = {
  'transparent': 'transparent',
  // ...
  'pink-lightest': '#ffebef',
}

// ...

module.exports = {
  // ...
  colors: colors,
  // ...
}
```

### Styles

The next set of properties define all of the values you'd like to use for utilities that are dynamically generated.

This includes things like:

  * Background colors
  * Border widths
  * Font weights
  * Text sizes
  * Padding and margin
  * Width and height scales
  * ...and many others.

For example, here's the section used to customize which text size utilities will be generated:

```js
// ...

module.exports = {
  // ...

  // TODO Add Comments

  textSizes: {
    'xs': 12,
    'sm': 14,
    'base': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  },

  // ...
}
```

Read through the generated config file or visit the "customizing" documentation for each module to learn more.

### Modules

The `modules` property is where you control which modules are generated, and what prefix & property are use for generate style.


```js
let colors = {
  //...
  'black': '#000000',
  //...
}

module.exports = {
  // ...

  textSizes: {
    'xs': 12,
    'sm': 14,
    'base': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  },
  borderColors: colors,
  borderWidths: {
    'default': 1,
    '0': 0,
    '2': 2,
    '4': 4,
    '8': 8
  }

  modules: {
    borderColors: {
      prefix: 'border',
      propertyName: 'borderColor'
    },
    textSizes: {
      prefix: 'text',
      propertyName: 'fontSize'
    },
    borderWidths: {
      prefix: 'border',
      propertyName: 'borderWidth',
      sides: {
          '-l': 'left',
          '-r': 'right',
          '-t': 'top',
          '-b': 'bottom',
          '-x': ['left', 'right'],
          '-y': ['top', 'bottom']
      }
    }
  
    // ...
  },
  // ...
}
```

Each key name in `modules` are directly connected to key in `module.exports`. Like this

```js

//...
module.exports = {
  //..
  textSizes: {
    'xs': 12,
    'sm': 14,
    'base': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  }
  //..
  modules: {

    //...

    textSizes: {
      prefix: 'text',
      propertyName: 'fontSize'
    }

    //...

  }
}

```

This will generate

```js
styles = {

  //...

  'text-xs': { fontSize: 12 },
  'text-sm': { fontSize: 14 },
  'text-base': { fontSize: 16 },
  'text-lg': { fontSize: 18 },
  'text-xl': { fontSize: 20 },
  'text-2xl': { fontSize: 24 },
  'text-3xl': { fontSize: 30 },
  'text-4xl': { fontSize: 36 },
  'text-5xl': { fontSize: 48 },

  //...

}
```

Here in below image you can see how it generate style from module structure.

![config](/assets/images/config.png)

If you change `prefix` value `text` to `t` then it will generate style key name like `t-xs` instend of `text-xs`.

To completely disable module just remove that key from `modules`. 
