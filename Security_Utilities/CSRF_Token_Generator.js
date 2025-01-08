function generateCSRFToken() {
    return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
  }
  
  export { generateCSRFToken };