// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber() Tests
test('isPhoneNumber - valid number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - valid number (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - invalid number 123-456', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber - invalid number ABC-DEFG', () => {
  expect(isPhoneNumber('ABC-DEFG')).toBe(false);
});

// isEmail() Tests
test('isEmail - valid email test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail - valid email user.name@mail.co', () => {
  expect(isEmail('user.name@mail.co')).toBe(true);
});

export function isEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
}

test('isEmail - invalid email test@.com', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('isEmail - invalid email without @ symbol', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

// isStrongPassword() Tests
test('isStrongPassword - valid password Abc123!', () => {
  expect(isStrongPassword('Abc123!')).toBe(true);
});

test('isStrongPassword - valid password 1Password_', () => {
  expect(isStrongPassword('1Password_')).toBe(true);
});

test('isStrongPassword - invalid password 12345', () => {
  expect(isStrongPassword('12345')).toBe(false);
});

test('isStrongPassword - invalid password abc', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

export function isStrongPassword(input) {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[\W_]).{8,}$/;
  return passwordRegex.test(input);
}

// isDate() Tests
test('isDate - valid date 01/01/2025', () => {
  expect(isDate('01/01/2025')).toBe(true);
});

test('isDate - valid date 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate - invalid date 13/01/2025', () => {
  expect(isDate('13/01/2025')).toBe(false);
});

test('isDate - invalid date 00/00/0000', () => {
  expect(isDate('00/00/0000')).toBe(false);
});
export function isDate(input) {
  // MM/DD/YYYY format with valid ranges
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
  return dateRegex.test(input);
}

export function isHexColor(input) {
  // Must start with `#`, followed by either 3 or 6 hex digits
  const hexColorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
  return hexColorRegex.test(input);
}
// isHexColor() Tests
test('isHexColor - valid hex #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('isHexColor - valid hex #123ABC', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});

test('isHexColor - invalid hex #12345G', () => {
  expect(isHexColor('#12345G')).toBe(false);
});

test('isHexColor - invalid hex 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(false);
});

