function addSingleEventListener(element, eventType, handler) {
  const listener = (event) => {
    handler(event);
    element.removeEventListener(eventType, listener);
  };

  element.addEventListener(eventType, listener);
}

export { addSingleEventListener };
