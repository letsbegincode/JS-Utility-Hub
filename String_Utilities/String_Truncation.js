function truncateString(string, maxLength, suffix = '...') {
  if (string.length <= maxLength) return string;
  return string.slice(0, maxLength) + suffix;
}

export { truncateString };
