*This repository is a mirror of the [component](http://component.io) module [matthewmueller/switcher](http://github.com/matthewmueller/switcher). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/matthewmueller-switcher`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# Switcher

Switch between elements using a class. Ensures that you can only select one element at a time.

```html
<ul>
  <li>hi</li>
  <li>hello</li>
  <li>whats up</li>
  <li>whatever</li>
  <li>cool</li>
</ul>

<div id="another">another item</div>
```

```js
var Switch = require('switcher');
var switcher = Switch(),
    items = document.querySelectorAll('li');

for (var i = 0, len = items.length; i < len; i++) {
  switcher.add(items[i]);
};

switcher.add(another);
```

## Installation

    $ component install matthewmueller/switcher

## API

### `switcher([className])`

Initialize a switcher with a given `className`. Defaults to `.is-selected`.

### `.add(el, [fn])`

Add an element to the switcher with an optional `fn`.

### `.remove(el)`

Remove an element from the switcher and unbinds the click event.

## License

  MIT
