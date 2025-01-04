# Event Handling

## Overview
This folder contains utilities for managing event listeners effectively:
1. **Event Delegation**: Delegate events to parent elements to handle dynamic child elements.
2. **Custom Event Emitters**: Create and manage custom events with an EventEmitter class.
3. **Single Execution Event Listeners**: Add event listeners that automatically remove themselves after one execution.

## Usage Examples

### Event Delegation
```javascript
import { delegateEvent } from './Event_Delegation.js';

delegateEvent('#parent', 'click', '.child', (event, target) => {
  console.log('Child element clicked:', target);
});
```

### Custom Event Emitters
```javascript
import { EventEmitter } from './Custom_Event_Emitters.js';

const emitter = new EventEmitter();

emitter.on('greet', (name) => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'Alice');

emitter.off('greet', listener);
```

### Single Execution Event Listeners
```javascript
import { addSingleEventListener } from './Single_Execution_Event_Listeners.js';

const button = document.querySelector('#myButton');

addSingleEventListener(button, 'click', (event) => {
  console.log('Button clicked:', event.target);
});
```

## Features
- **Event Delegation**: Simplifies handling events for dynamic DOM elements.
- **Custom Event Emitters**: Encapsulates event logic for modularity.
- **Single Execution Listeners**: Automatically cleans up listeners for performance.

## Future Enhancements
- Add support for namespaced events in the EventEmitter.
- Introduce a utility for debouncing or throttling event listeners.
