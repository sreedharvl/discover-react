import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  updateField: (text: string) => void;
  value: string;
}

// function TextInput(props: TextInputProps) {
// const {id, label, updateField} = props;

function TextInput({ id, label, updateField, value }: TextInputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="form-control"
        onChange={(event) => updateField(event.currentTarget.value)}
        value={value}
      />
    </div>
  );
}

export default TextInput;
