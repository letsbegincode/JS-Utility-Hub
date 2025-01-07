# Miscellaneous Utilities

## Overview
This folder contains a variety of utilities for everyday development needs:
1. **UUID Generator**: Generate unique identifiers in UUID format.
2. **Clipboard Copy Utility**: Easily copy text to the clipboard.
3. **Dark Mode Toggle**: Toggle a dark mode style for your web app.
4. **Custom Logger with Levels**: A customizable logging utility for various log levels.

## Usage Examples

### UUID Generator
```javascript
import { generateUUID } from './UUID_Generator.js';

const uuid = generateUUID();
console.log(uuid); // Example: '123e4567-e89b-12d3-a456-426614174000'
```

### Clipboard Copy Utility
```javascript
import { copyToClipboard } from './Clipboard_Copy_Utility.js';

const text = "Copy this text!";
copyToClipboard(text);
```

### Dark Mode Toggle
```javascript
import { toggleDarkMode } from './Dark_Mode_Toggle.js';

document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
```

### Custom Logger
```javascript
import { logMessage, levels } from './Custom_Logger.js';

logMessage(levels.info, 'This is an informational message.');
logMessage(levels.warn, 'This is a warning message.');
logMessage(levels.error, 'This is an error message.');
```

## Features
- **UUID Generator**: Creates RFC4122-compliant UUIDs.
- **Clipboard Copy Utility**: Supports modern clipboard API with async operations.
- **Dark Mode Toggle**: Simple integration for toggling CSS class.
- **Custom Logger**: Provides clear and timestamped logs for debugging.

## Future Enhancements
- Add support for theme persistence in the Dark Mode Toggle.
- Extend Custom Logger to support output to external log files or services.
