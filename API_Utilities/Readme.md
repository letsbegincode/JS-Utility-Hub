# API Utilities

## Overview
This folder contains utilities for enhancing API request handling:
1. **Fetch Wrapper with Timeout**: Provides a `fetch` wrapper with timeout handling.
2. **Retry Mechanism for Failed API Calls**: Retries failed requests with configurable retry count and delay.
3. **Rate Limiter for API Requests**: Limits the number of API calls within a specified interval.

## Usage Examples

### Fetch Wrapper with Timeout
```javascript
import { fetchWithTimeout } from './Fetch_Wrapper.js';

fetchWithTimeout('https://api.example.com/data', {}, 3000)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Retry Mechanism for Failed API Calls
```javascript
import { retryFetch } from './Retry_API_Calls.js';

retryFetch('https://api.example.com/data', {}, 3, 2000)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### Rate Limiter for API Requests
```javascript
import { rateLimiter } from './Rate_Limiter.js';

const limitedFetch = rateLimiter(fetch, 5, 1000); // Max 5 requests per second

limitedFetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## Features
- **Fetch Wrapper**: Adds timeout support to standard fetch calls.
- **Retry Mechanism**: Configurable retries and delays for robust API handling.
- **Rate Limiter**: Ensures API request rate compliance.

## Future Enhancements
- Add support for exponential backoff in retry mechanism.
- Include cancelable requests using AbortController.
