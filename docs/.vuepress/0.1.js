module.exports = [
  {
    title: 'Introduction',
    collapsable: false,
    children: prefix('introduction', [
        ''
    ]),
  },
  {
      title: 'Getting Started',
      collapsable: false,
      children: prefix('getting-started', [
          'installation',
          'configuration',
          'watchman',
          'how-to-use',
          'adding-custom-module',
      ]),
  },
  {
    title: 'Layout',
    collapsable: false,
    children: prefix('layout', [
        'position',
        'z-index'
    ]),
  },
  {
    title: 'Typography',
    collapsable: false,
    children: prefix('typography', [
        'text-color',
        'font-size',
        'font-weight',
        'letter-spacing',
        'line-height',
        'style-decoration',
        'text-alignment'
    ]),
  },
  {
    title: 'Backgrounds',
    collapsable: false,
    children: prefix('backgrounds', [
        'background-colors'
    ]),
  },
  {
    title: 'Borders',
    collapsable: false,
    children: prefix('borders', [
        'border-colors',
        'border-style',
        'border-width',
        'border-radius'
    ]),
  },
  {
    title: 'Flexbox',
    collapsable: false,
    children: prefix('flexbox', [
        'flex',
        'flex-direction',
        'flex-wrapping',
        'align-items',
        'align-content',
        'align-self',
        'justify-content',
        'flex-grow-shrink'
    ]),
  },
  {
    title: 'Spacing',
    collapsable: false,
    children: prefix('spacing', [
        'padding-margin'
    ]),
  },
  {
    title: 'Sizing',
    collapsable: false,
    children: prefix('sizing', [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height'
    ]),
  },
  {
    title: 'Miscellaneous',
    collapsable: false,
    children: prefix('miscellaneous', [
        'opacity'
    ]),
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}