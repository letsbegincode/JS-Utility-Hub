async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard:', text);
    } catch (err) {
      console.error('Failed to copy text to clipboard:', err);
    }
  }
  
  export { copyToClipboard };