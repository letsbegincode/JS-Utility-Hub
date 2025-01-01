function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);

  // Set attributes
  for (const [key, value] of Object.entries(attributes)) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, value);
    } else {
      element[key] = value;
    }
  }

  // Append children
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

function appendToParent(parent, ...children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}

export { createElement, appendToParent };
