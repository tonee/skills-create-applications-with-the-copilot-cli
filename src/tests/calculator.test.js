/**
 * Unit tests for calculator.js
 *
 * Covers all seven supported operations:
 *   - add        (Addition)
 *   - subtract   (Subtraction)
 *   - multiply   (Multiplication)
 *   - divide     (Division)
 *   - modulo     (Modulo)
 *   - exponent   (Exponentiation)
 *   - squareRoot (Square Root)
 *
 * Includes image-driven examples and edge cases such as division by zero,
 * negative numbers, decimals, and identity values.
 */

const { add, subtract, multiply, divide, modulo, exponent, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('adds two positive numbers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number (5 + -3 = 2)', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers (-4 + -6 = -10)', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adding zero returns the same number (7 + 0 = 7)', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers (1.5 + 2.5 = 4)', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts two positive numbers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('result is negative when b > a (3 - 8 = -5)', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test('subtracts a negative number (5 - -3 = 8)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracting zero returns the same number (9 - 0 = 9)', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts decimal numbers (5.5 - 2.5 = 3)', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies two positive numbers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies by zero (6 * 0 = 0)', () => {
    expect(multiply(6, 0)).toBe(0);
  });

  test('multiplies by one returns the same number (8 * 1 = 8)', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies two negative numbers (-3 * -4 = 12)', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number (5 * -3 = -15)', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies decimal numbers (2.5 * 4 = 10)', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('divides two positive numbers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal (7 / 2 = 3.5)', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('divides a negative number (-12 / 4 = -3)', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers (-15 / -3 = 5)', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('dividing zero by a number returns zero (0 / 5 = 0)', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('returns the remainder of two positive numbers (10 % 3 = 1)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b (12 % 4 = 0)', () => {
    expect(modulo(12, 4)).toBe(0);
  });

  test('works with negative dividend (-10 % 3 = -1)', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('works with negative divisor (10 % -3 = 1)', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('works with decimal numbers (5.5 % 2 = 1.5)', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero must throw
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Exponentiation ───────────────────────────────────────────────────────────
describe('exponent', () => {
  test('raises a positive base to a positive exponent (2 ** 8 = 256)', () => {
    expect(exponent(2, 8)).toBe(256);
  });

  test('any number to the power of 0 is 1 (5 ** 0 = 1)', () => {
    expect(exponent(5, 0)).toBe(1);
  });

  test('any number to the power of 1 is itself (7 ** 1 = 7)', () => {
    expect(exponent(7, 1)).toBe(7);
  });

  test('handles negative exponent (2 ** -1 = 0.5)', () => {
    expect(exponent(2, -1)).toBe(0.5);
  });

  test('handles fractional exponent (9 ** 0.5 = 3)', () => {
    expect(exponent(9, 0.5)).toBeCloseTo(3);
  });

  test('handles negative base with even exponent (-3 ** 2 = 9)', () => {
    expect(exponent(-3, 2)).toBe(9);
  });
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  test('returns the square root of a perfect square (25 → 5)', () => {
    expect(squareRoot(25)).toBe(5);
  });

  test('returns the square root of 0 (0 → 0)', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns the square root of 1 (1 → 1)', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('returns a decimal for non-perfect squares (2 → ~1.414)', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('returns the square root of a large number (144 → 12)', () => {
    expect(squareRoot(144)).toBe(12);
  });

  // Edge case: square root of a negative number must throw
  test('throws an error when input is negative', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take the square root of a negative number');
  });
});
