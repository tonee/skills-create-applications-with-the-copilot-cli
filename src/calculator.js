/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        – Addition:         adds two numbers (a + b)
 *   subtract   – Subtraction:      finds the difference of two numbers (a - b)
 *   multiply   – Multiplication:   computes the product of two numbers (a * b)
 *   divide     – Division:         divides two numbers (a / b), with division-by-zero handling
 *   modulo     – Modulo:           returns the remainder of a divided by b (a % b)
 *   power      – Exponentiation:   raises base to the exponent (base ** exponent)
 *   squareRoot – Square Root:      returns the square root of n, with error handling for negatives
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3          → 8
 *   node calculator.js subtract 10 4    → 6
 *   node calculator.js multiply 6 7     → 42
 *   node calculator.js divide 20 4      → 5
 *   node calculator.js modulo 10 3      → 1
 *   node calculator.js power 2 8        → 256
 *   node calculator.js squareRoot 9     → 3
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
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed');
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Throws an error if n is negative (not a real number)
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of a negative number is not allowed');
  return Math.sqrt(n);
}

// CLI entry point — only runs when executed directly, not when imported as a module
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

const unaryOps = ['squareRoot'];
const isUnary = unaryOps.includes(operation);

if (!operation || isNaN(a) || (!isUnary && isNaN(b))) {
  console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
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
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot':
      result = squareRoot(a);
      break;
    default:
      console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
      process.exit(1);
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
