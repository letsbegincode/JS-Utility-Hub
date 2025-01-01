# Closures Utilities

## Overview
This folder contains utilities that leverage closures for encapsulating state and functionality:
1. **Counter Utility**: A simple counter with increment, decrement, and get operations.
2. **Memoization**: A function wrapper to cache results of expensive computations.
3. **Private State Management**: Encapsulates and manages private state for a functional approach.

## Usage Examples

### Counter Utility
```javascript
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0
console.log(counter.getCount()); // 0
```

### Memoization
```javascript
const slowFn = (num) => {
  console.log('Computing...');
  return num * 2;
};

const memoizedFn = memoize(slowFn);
console.log(memoizedFn(5)); // Computing... 10
console.log(memoizedFn(5)); // 10 (cached result)
```

### Private State Management
```javascript
const stateManager = createPrivateState(10);
console.log(stateManager.getState()); // 10
stateManager.setState(20);
console.log(stateManager.getState()); // 20
```

## Features
- **Counter Utility**: Tracks and manages counts securely.
- **Memoization**: Optimizes performance by caching results.
- **Private State Management**: Ensures encapsulation of state for better modularity.

## Future Enhancements
- Add additional operations for the Counter Utility.
- Extend memoization to support asynchronous functions.
- Enhance Private State Management with validation support.
