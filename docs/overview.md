# Overview

Bartender is a library for creating accessible off-canvas bars. Any number of bars is supported, and they can be located on any side of the viewport.

## Features

- Add any number of bars to any side of the viewport
- Multiple bars can be open simultaneously
- Bar properties, such as position can be changed on the fly
- Easily stylable with CSS custom properties
- Typed lightweight API with zero dependencies

## Accessibility

- The bars are rendered using [\<dialog\> elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog), providing native focus trap, focus return etc.
- All transitions are disabled if user prefers reduced motion

## Browser requirements

- [\<dialog\> element](https://caniuse.com/dialog) must be supported
- (optional) [transition-behavior: allow-discrete](https://caniuse.com/mdn-css_properties_content-visibility_transitionable) must be supported to enable bar transitions.
