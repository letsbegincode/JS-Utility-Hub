function rateLimiter(func, limit, interval) {
  let calls = 0;
  const queue = [];

  const execute = () => {
    if (queue.length === 0) return;
    if (calls < limit) {
      calls++;
      const { resolve, args } = queue.shift();
      func(...args).then(resolve);
      setTimeout(() => calls--, interval);
    }
    setTimeout(execute, interval / limit);
  };

  return (...args) => {
    return new Promise((resolve) => {
      queue.push({ resolve, args });
      execute();
    });
  };
}

export { rateLimiter };
