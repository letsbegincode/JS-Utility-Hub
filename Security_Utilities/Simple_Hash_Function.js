function simpleHash(input) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  
  export { simpleHash };
  