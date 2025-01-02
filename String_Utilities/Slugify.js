function slugify(string) {
  return string
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ''); // Remove special characters
}

export { slugify };
