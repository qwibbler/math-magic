import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return { ...obj }; // Todo: should be {...obj}
    }
    // Trim excess 0
    if (buttonName !== '0' && obj.next === '0') {
      return { ...obj, next: buttonName }; // Todo: should be {...obj}
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return { total: null, next: '0.' }; // TODO
      }
      return { total: `${obj.total}.` }; // Todo: should be { next: `${obj.total}.` } - or not.
    }
    return { next: '0.' }; // Todo: should be { next: '0.' }
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) { // Todo: && total
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first,
  if (!obj.next && !obj.total) {
    // Todo: if it is a +, -, +/-
    // if (buttonName === '+' || buttonName === '-' || buttonName === '+/-') {
    //   obj.next = '-'
    // }

    // do nothing.
    return {};
  }

  // User pressed an operation after pressing '=' (only total)
  if (obj.total && !obj.next && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  // if (!obj.next) {
  //   return { operation: buttonName };
  // }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
