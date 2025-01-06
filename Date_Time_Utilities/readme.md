# Date and Time Utilities

## Overview
This folder contains utilities for handling and formatting dates and times.
1. **Format Date**: Convert dates to readable formats or custom templates.
2. **Time Ago in Words**: Display relative time, e.g., "5 minutes ago."
3. **Countdown Timer**: Create and manage countdown timers.

## Usage Examples

### Format Date
```javascript
import { formatDate } from './Format_Date.js';

const formatted = formatDate(new Date(), 'DD/MM/YYYY');
console.log(formatted); // Output: "01/01/2025"
```

### Time Ago in Words
```javascript
import { timeAgo } from './Time_Ago_in_Words.js';

const pastDate = new Date('2025-01-01T00:00:00');
console.log(timeAgo(pastDate)); // Output: "5 days ago"
```

### Countdown Timer
```javascript
import { countdownTimer } from './Countdown_Timer.js';

const endTime = new Date().getTime() + 10000; // 10 seconds from now

countdownTimer(
  endTime,
  ({ days, hours, minutes, seconds }) => {
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  },
  () => {
    console.log('Countdown complete!');
  }
);
```

## Features
- **Format Date**: Supports custom templates for output format.
- **Time Ago in Words**: Handles precise and human-readable time intervals.
- **Countdown Timer**: Flexible callbacks for updates and completion.

## Future Enhancements
- Add time zone support for date formatting.
- Expand the `timeAgo` function to handle future dates.
