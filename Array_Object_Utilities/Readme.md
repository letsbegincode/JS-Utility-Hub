# Array and Object Utilities

## Overview
This folder includes utilities for common operations on arrays and objects:
1. **Deep Clone**: Create a deep copy of an object or array.
2. **Flatten Nested Arrays**: Convert nested arrays into a single flat array.
3. **Find Unique Elements**: Extract unique elements from an array.
4. **Merge Multiple Objects**: Merge multiple objects into one.

## Usage Examples

### Deep Clone
```javascript
import { deepClone } from './Deep_Clone.js';

const obj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(obj);
console.log(clonedObj);
```

### Flatten Nested Arrays
```javascript
import { flattenArray } from './Flatten_Nested_Arrays.js';

const nestedArray = [1, [2, [3, [4]]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4]
```

### Find Unique Elements
```javascript
import { findUniqueElements } from './Find_Unique_Elements.js';

const array = [1, 2, 2, 3, 4, 4];
const uniqueArray = findUniqueElements(array);
console.log(uniqueArray); // [1, 2, 3, 4]
```

### Merge Multiple Objects
```javascript
import { mergeObjects } from './Merge_Multiple_Objects.js';

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }
```

## Features
- **Deep Clone**: Reliable method for cloning complex objects.
- **Flatten Nested Arrays**: Handles arrays of any depth.
- **Find Unique Elements**: Leverages `Set` for performance.
- **Merge Multiple Objects**: Supports any number of objects to merge.

## Future Enhancements
- Add support for partial deep cloning.
- Introduce utility to compare object differences.
