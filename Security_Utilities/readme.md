# Security Utilities

## Overview
This folder provides essential utilities to enhance web application security:
1. **Sanitize User Input**: Prevent injection attacks by sanitizing user inputs.
2. **CSRF Token Generator**: Generate secure tokens to prevent CSRF attacks.
3. **Simple Hash Function for Obfuscation**: Lightweight hashing function for quick obfuscation of strings.

## Usage Examples

### Sanitize User Input
```javascript
import { sanitizeInput } from './Sanitize_User_Input.js';

const unsafeInput = "<script>alert('hack!')</script>";
const safeInput = sanitizeInput(unsafeInput);
console.log(safeInput); // Output: &lt;script&gt;alert('hack!')&lt;/script&gt;
```

### CSRF Token Generator
```javascript
import { generateCSRFToken } from './CSRF_Token_Generator.js';

const csrfToken = generateCSRFToken();
console.log(csrfToken); // Example: "MTIzNDU2Nzg5MGFiY2RlZg=="
```

### Simple Hash Function
```javascript
import { simpleHash } from './Simple_Hash_Function.js';

const input = "example";
const hashValue = simpleHash(input);
console.log(hashValue); // Example: 123456789
```

## Features
- **Sanitize User Input**: Uses DOM manipulation for effective input sanitization.
- **CSRF Token Generator**: Leverages `crypto` API for secure, random token generation.
- **Simple Hash Function**: Provides a quick, easy-to-implement hashing mechanism.

## Future Enhancements
- Add support for advanced sanitization based on HTML5 specifications.
- Introduce a cryptographically secure hash function.
