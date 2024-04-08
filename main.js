function addValues(a, b) {
  if (a + b) {
    return a + b;
  } else {
    throw new Error('Addition not possible for the provided types.');
  }
};

function stringifyValue(argumentToSrtingify) {
  if (Array.isArray(argumentToSrtingify) || 
      typeof argumentToSrtingify === 'object') {
    return JSON.stringify(argumentToSrtingify);
  } else {
    return String(argumentToSrtingify);
  }
};