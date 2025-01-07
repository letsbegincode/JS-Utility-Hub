const levels = {
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
  };
  
  function logMessage(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${levels[level]}]: ${message}`);
  }
  
  export { logMessage, levels };