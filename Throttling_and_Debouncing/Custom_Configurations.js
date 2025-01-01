function throttleCustom(func, limit, options = { leading: true, trailing: true }) {
  let lastFunc;
  let lastRan;
  let trailingCall = false;

  return function () {
    const context = this;
    const args = arguments;
    const now = Date.now();

    if (!lastRan && options.leading) {
      func.apply(context, args);
      lastRan = now;
    } else if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
      trailingCall = false;
    } else if (options.trailing) {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (trailingCall) {
          func.apply(context, args);
          lastRan = Date.now();
          trailingCall = false;
        }
      }, limit);
      trailingCall = true;
    }
  };
}
