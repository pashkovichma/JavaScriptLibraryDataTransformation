function addValues (valueToAdd1, valueToAdd2) {
  try {
    let result  = valueToAdd1 + valueToAdd2;
    return result;
  } catch (err) {
    throw new Error('The addition is not possible');
  }
};

function stringifyValue(valueToSrtingify) {
  if (Array.isArray(valueToSrtingify) || 
      typeof valueToSrtingify === 'object') {
    return JSON.stringify(valueToSrtingify);
  } else {
    return String(valueToSrtingify);
  }
};

function invertBoolean (booleanValue) {
  if (typeof booleanValue === 'boolean') {
    return !booleanValue;
  } else {
    throw new Error('The argument is not a boolean');
  }
};