import React from 'react';
import {Form} from 'components/bootstrap';
import PropTypes from 'prop-types';

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
};

function SelectInput({name, label, value, onChange, options, defaultOption, error}) {
  function inputOnChange(event) {
    onChange(name, event.target.value);
  }

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>

      <Form.Control as="select" name={name} value={value} onChange={inputOnChange}>
        <option value="">{defaultOption}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </Form.Control>
      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
}

export default SelectInput;
