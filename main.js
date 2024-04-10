function addValues (valueToAdd1, valueToAdd2) {
  try {
    let result  = valueToAdd1 + valueToAdd2;
    return result;
  } catch (err) {
    throw new Error(`Addition is not possible for ${typeof valueToAdd1} and ${typeof valueToAdd2}`);
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

function convertToNumber (valueToNumber) {
  if (typeof valueToNumber === 'number') {
    return valueToNumber;
  } else if (typeof valueToNumber === 'string') {
    const floatValue = parseFloat(valueToNumber);
    if (!isNaN(floatValue)) {
      return floatValue;
    } else {
      throw new Error(`Conversion is not possible for value ${valueToNumber} with type ${typeof valueToNumber}`);
    }
  } else if (typeof valueToNumber === 'boolean') {
    return valueToNumber ? 1 : 0;
  } else if (typeof valueToNumber === 'bigint') {
    return Number(valueToNumber);
  }  else if ( valueToNumber === null || valueToNumber === undefined) {
    return 0;
  } else if (typeof valueToNumber === 'object'){
    throw new Error(`Conversion is not possible for ${JSON.stringify(valueToNumber)}`);
  } else if (typeof valueToNumber === 'function'){
  throw new Error(`Conversion is not possible for ${valueToNumber}`);
  } else if (typeof valueToNumber === 'symbol'){
    throw new Error(`Conversion is not possible for symbol`);
  } else {
    throw new Error(`Conversion is not possible`);
  }
};

function coerceToType (value, type) {
  switch (type) {
    case 'number':
      return convertToNumber(value);
    case 'string':
      return String(value);
    case 'boolean':
      return Boolean(value);
    default:
      throw new Error('Coercion is not possible');
  }
};