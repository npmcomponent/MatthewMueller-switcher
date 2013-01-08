/**
 * Module dependencies
 */

var event = require('event'),
    classes = require('classes');

/**
 * Elements cache
 */

var elements = [];

/**
 * Previous element
 */

var prev = null;

/**
 * Expose `Switcher`
 */

module.exports = Switcher;

/**
 * Initialize `Switcher`
 */

function Switcher(cls) {
  if(!(this instanceof Switcher)) return new Switcher(cls);
  this.className = cls || 'is-selected';
}

/**
 * Add an element
 *
 * @param {Element} el
 * @return {Switcher}
 * @api public
 */

Switcher.prototype.add = function(el, fn) {
  var self = this;

  element = new Element(el, function() {
    classes(el).add(self.className);
    if(prev && prev != el) classes(prev).remove(self.className);
    fn && fn();
    prev = el;
  });

  elements.push(element);
  return this;
};

/**
 * Remove
 *
 * @param {Element} el
 * @return {Switcher}
 * @api public
 */

Switcher.prototype.remove = function(el) {
  for (var i = 0, len = elements.length; i < len; i++) {
    if(elements[i].el == el) elements[i].unbind();
  }
};

/**
 * Initialize Element
 *
 * @param {Element} el
 * @param {Function} fn
 */

function Element(el, fn) {
  this.el = el;
  this.fn = fn;
  event.bind(this.el, 'click', this.fn);
}

/**
 * Unbind the element
 */

Element.prototype.unbind = function() {
  event.unbind(this.el, 'click', this.fn);
};
