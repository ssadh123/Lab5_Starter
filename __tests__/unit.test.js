// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Simple test that will pass
test('isPhoneNumber - valid number 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

