import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Form} from 'components/bootstrap';

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

NumberInput.defaultProps = {
  placeholder: '0',
};

function NumberInput({name, label, onChange, value, placeholder, error}) {
  let wrapperClass = classnames({
    'form-group': true,
    'has-error': error && error.length > 0,
  });

  function inputOnChange(event) {
    onChange(event.target.name, Number(event.target.value));
  }

  return (
    <div className={wrapperClass}>
      <Form.Label htmlFor={name}>{label}</Form.Label>

      <input
        type="number"
        name={name}
        className="form-control"
        min="0"
        step="1"
        value={value || ''}
        placeholder={placeholder}
        onChange={inputOnChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default NumberInput;
