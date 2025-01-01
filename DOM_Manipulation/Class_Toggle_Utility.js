function toggleClasses(element, classes = [], action = 'toggle') {
  if (!element || !classes.length) return;
  classes.forEach((cls) => {
    if (action === 'add') {
      element.classList.add(cls);
    } else if (action === 'remove') {
      element.classList.remove(cls);
    } else {
      element.classList.toggle(cls);
    }
  });
}

export { toggleClasses };
