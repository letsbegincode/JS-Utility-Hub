# String Utilities

## Overview
This folder provides utilities for various string operations:
1. **Slugify**: Converts strings to URL-safe formats.
2. **String Truncation with Suffix**: Trims strings to a specified length with an optional suffix.
3. **Case Converters**: Converts strings between CamelCase, SnakeCase, and KebabCase.

## Usage Examples

### Slugify
```javascript
import { slugify } from './Slugify.js';

const title = "Hello World! JS Utilities";
const slug = slugify(title);
console.log(slug); // "hello-world-js-utilities"
```

### String Truncation with Suffix
```javascript
import { truncateString } from './String_Truncation.js';

const text = "This is a long sentence that needs truncation.";
const truncated = truncateString(text, 20);
console.log(truncated); // "This is a long se..."
```

### Case Converters
```javascript
import { toCamelCase, toSnakeCase, toKebabCase } from './Case_Converters.js';

const string = "hello world-example_string";
console.log(toCamelCase(string)); // "helloWorldExampleString"
console.log(toSnakeCase(string)); // "hello_world_example_string"
console.log(toKebabCase(string)); // "hello-world-example-string"
```

## Features
- **Slugify**: Handles spaces and special characters effectively.
- **String Truncation**: Flexible length control with customizable suffix.
- **Case Converters**: Supports multiple naming conventions seamlessly.

## Future Enhancements
- Add support for title case conversion.
- Introduce utilities for string padding and alignment.
