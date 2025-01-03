function fetchWithTimeout(url, options = {}, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url, options)
      .then((response) => {
        clearTimeout(timer);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

export { fetchWithTimeout };
