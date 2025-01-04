function delegateEvent(parentSelector, eventType, childSelector, handler) {
  const parentElement = document.querySelector(parentSelector);

  if (!parentElement) {
    throw new Error('Parent element not found');
  }

  parentElement.addEventListener(eventType, (event) => {
    const targetElement = event.target.closest(childSelector);

    if (targetElement && parentElement.contains(targetElement)) {
      handler(event, targetElement);
    }
  });
}

export { delegateEvent };
