# Getting started

## Installation

```console
npm i @fokke-/bartender.js
```

## Markup

```html
<!-- Button for opening the bar -->
<button class="openMobileNav">Open mobile navigation</button>

<!-- Add any number of bars as dialog elements -->
<dialog class="mobileNav">
  <button class="closeMobileNav">Close mobile navigation</button>
</dialog>
```

## Include CSS

```css
@import '@fokke-/bartender.js/dist/bartender.css';
```

## Initialize the library

```javascript
import { Bartender } from '@fokke-/bartender.js'

// Create main instance
const bartender = new Bartender()

// Add a new bar
bartender.addBar('mobileNav', {
  el: document.querySelector('.mobileNav'),
  position: 'left',
})

// Handle open button
document.querySelector('.openMobileNav').addEventListener('click', (event) => {
  bartender.open('mobileNav')
})

// Handle close button
document.querySelector('.closeMobileNav').addEventListener('click', (event) => {
  bartender.close()
})
```
