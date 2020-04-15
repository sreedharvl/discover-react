import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GreeterFunctional from './GreeterFunctional';

test('Greeting should update on last name being entered', () => {
  // Render GreeterFunctional
  const { getByLabelText, getByTestId, getByText, queryByText } = render(
    <GreeterFunctional companyName="Test company" />,
  );

  // Use a query to fetch a reference to the last name input field
  const lastNameField = getByLabelText(/last name/i);
  // const lastNameField = getByTestId('last-name-field');

  // Check expectations
  // expect(queryByText(/Hello, Paxton/)).toBeNull();

  // Will throw an error
  expect(() => getByText(/Hello, Paxton/)).toThrow();

  // Fire a change event on that field
  fireEvent.change(lastNameField, { target: { value: 'Paxton' } });

  // Check to see if there's an element in the document with the text "Hello, {lastName}"
  const greetingDisplay = queryByText(/Hello, Paxton/);
  expect(greetingDisplay).toBeInTheDocument();
});

test('More than one component interaction', () => {
  const { getByLabelText, getByText} = render(<GreeterFunctional companyName="Test company" />);
  const firstNameField = getByLabelText(/first name/);
  fireEvent.change(firstNameField, { target: { value: 'John' } });

  const greetingDisplay = getByText(/John/);
  expect(greetingDisplay).toBeInTheDocument();
});
