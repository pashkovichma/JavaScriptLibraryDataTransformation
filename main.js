function addValues(a, b) {
  if (a + b) {
    return a + b;
  } else {
    throw new Error('Addition not possible for the provided types.');
  }
};