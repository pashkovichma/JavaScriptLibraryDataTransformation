function addValues (valueToAdd1, valueToAdd2) {
  try {
    let result  = valueToAdd1 + valueToAdd2;
    return result;
  } catch (err) {
    throw new Error('The addition is not possible');
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