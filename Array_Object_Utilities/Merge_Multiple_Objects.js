function mergeObjects(...objects) {
  return objects.reduce((merged, obj) => {
    return { ...merged, ...obj };
  }, {});
}

export { mergeObjects };
