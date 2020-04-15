// Test files can be:
// Foo.test.tsx
// Foo.spec.tsx 
// __tests__/Foo.tsx

// Enzyme
// Kent C Dodds / React Testing Library
// https://testing-library.com/docs/react-testing-library

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

test('Mathmatical operators', () => {
  expect(1 + 1).toEqual(2);
  expect(2 + 2).not.toEqual(5);
  expect(2 * 4).toBe(8);
});

it('should test addition', () => {
 expect(2 + 3).toEqual(5);
});

test('TextInput', () => {
  const labelText = 'Some label';
  const {getByLabelText} = render(<TextInput label={labelText} id="foo"/>);
  // const element = getByLabelText(/some label/i);
  // const element = getByLabelText(new RegExp('some label', 'i'));
  const element = getByLabelText(labelText);

  expect(element).toBeInTheDocument();
})