function toCamelCase(string) {
  return string
    .toLowerCase()
    .replace(/([-_\s]+\w)/g, (match) => match.toUpperCase().replace(/[-_\s]/g, ''));
}

function toSnakeCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase();
}

function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export { toCamelCase, toSnakeCase, toKebabCase };
