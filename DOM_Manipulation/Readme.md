# DOM Manipulation Utilities

## Overview
This folder provides utilities to simplify and enhance DOM manipulations in JavaScript:
1. **Element Selector Helpers**: Simplifies selecting single and multiple DOM elements.
2. **Class Toggle Utility**: Adds, removes, or toggles multiple classes efficiently.
3. **Create and Append Elements Dynamically**: Streamlines creating elements with attributes and appending them to the DOM.

## Usage Examples

### Element Selector Helpers
```javascript
import { $, $$ } from './Element_Selector_Helpers.js';

const header = $('#header');
const items = $$('.list-item');
console.log(header, items);
```

### Class Toggle Utility
```javascript
import { toggleClasses } from './Class_Toggle_Utility.js';

const element = document.querySelector('.my-element');
toggleClasses(element, ['class1', 'class2'], 'add');
toggleClasses(element, ['class2'], 'remove');
toggleClasses(element, ['class3']);
```

### Create and Append Elements Dynamically
```javascript
import { createElement, appendToParent } from './Create_And_Append_Elements.js';

const newDiv = createElement('div', { id: 'new-div', className: 'container' }, [
  'Hello World',
  createElement('span', { className: 'highlight' }, ['Click here!'])
]);

appendToParent(document.body, newDiv);
```

## Features
- **Element Selector Helpers**: Shortcuts for frequently used DOM queries.
- **Class Toggle Utility**: Handles multiple class operations in a single call.
- **Create and Append Elements Dynamically**: Encapsulates dynamic DOM creation in reusable functions.

## Future Enhancements
- Add support for event listeners during element creation.
- Include utility for safely removing DOM elements.
