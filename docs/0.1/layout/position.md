# Position
### Utilities for controlling how an element is positioned in the View.

|Class|Properties|
|-|-|
|absolute|position: 'absolute'|
|relative|position: 'relative'|
|pin|top: 0 <br> right: 0 <br> bottom: 0 <br> left: 0|
|pin-t|top: 0|
|pin-b|bottom: 0|
|pin-l|left: 0|
|pin-r|right: 0|
|pin-y|top: 0, <br /> bottom: 0|
|pin-x|left: 0, <br /> right: 0|

### Relative
Use `relative` to position an element according to the normal flow of the view.

Offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.

### Absolute
Use `absolute` to position an element outside of the normal flow of the view, causing neighboring elements to act as if the element doesn't exist.

Offsets are calculated relative to the nearest parent, and the element will act as a position reference for other absolutely positioned children.

### Pinning edges

Use the `pin{-edge?}` utilities to anchor absolutely positioned elements against any of the edges of the nearest positioned parent.

Combined with DoublwWind's spacing utilities, you'll probably find that these are all you need to precisely control absolutely positioned elements.

|Class|Edge|
|-|-|
|pin|`t` Top <br> `b` Bottom <br> `l` Left <br> `r` Right|

If edge is not define then it conside as `all`.

Here is an example how to use position in your application

<snack-preview snack-name="position" />