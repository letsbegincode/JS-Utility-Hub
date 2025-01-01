# Throttling and Debouncing Utilities

## Overview
This folder contains utilities for:
1. **Throttling for Event Listeners**: Limits the execution of a function to once per specified interval.
2. **Debouncing for Search Inputs**: Ensures a function is only executed after a specified delay.
3. **Custom Configurations**: Allows configuring leading and trailing executions for throttling.

## Usage Examples

### Throttling for Event Listeners
```javascript
const handleScroll = throttle(() => {
  console.log('Scroll event triggered');
}, 200);

window.addEventListener('scroll', handleScroll);
```

### Debouncing for Search Inputs
```javascript
const handleSearch = debounce(() => {
  console.log('Search input processed');
}, 300);

document.querySelector('input').addEventListener('input', handleSearch);
```

### Custom Configurations for Throttling
```javascript
const handleResize = throttleCustom(() => {
  console.log('Window resized');
}, 200, { leading: false, trailing: true });

window.addEventListener('resize', handleResize);
```

## Features
- Throttling ensures high performance for event listeners.
- Debouncing prevents unnecessary function calls for user inputs.
- Custom configurations allow greater flexibility for throttling behavior.

## Future Enhancements
- Add support for advanced use cases like grouped throttling.
- Combine debouncing and throttling into a hybrid utility.
```
