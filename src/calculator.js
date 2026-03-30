/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add         – Addition:         adds two numbers (a + b)
 *   subtract    – Subtraction:      finds the difference of two numbers (a - b)
 *   multiply    – Multiplication:   computes the product of two numbers (a * b)
 *   divide      – Division:         divides two numbers (a / b), with division-by-zero handling
 *   modulo      – Modulo:           remainder of a divided by b (a % b), with division-by-zero handling
 *   exponent    – Exponentiation:   raises a to the power of b (a ** b)
 *   sqrt        – Square Root:      returns the square root of a, with negative-number handling
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3        → 8
 *   node calculator.js subtract 10 4  → 6
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 20 4    → 5
 *   node calculator.js modulo 10 3    → 1
 *   node calculator.js exponent 2 8   → 256
 *   node calculator.js sqrt 25        → 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent undefined behaviour
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero to prevent undefined behaviour
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a % b;
}

// Exponentiation: returns a raised to the power of b
function exponent(a, b) {
  return Math.pow(a, b);
}

// Square Root: returns the square root of a
// Throws an error if a is negative (not a real number)
function squareRoot(a) {
  if (a < 0) throw new Error('Cannot take the square root of a negative number');
  return Math.sqrt(a);
}

// CLI entry point — only runs when executed directly, not when imported as a module
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

// sqrt only needs one argument; all others require two
const needsTwoArgs = operation !== 'sqrt';

if (!operation || isNaN(a) || (needsTwoArgs && isNaN(b))) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|exponent|sqrt> <num1> [num2]');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
      result = modulo(a, b);
      break;
    case 'exponent':
      result = exponent(a, b);
      break;
    case 'sqrt':
      result = squareRoot(a);
      break;
    default:
      console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, exponent, or sqrt.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, exponent, squareRoot };
