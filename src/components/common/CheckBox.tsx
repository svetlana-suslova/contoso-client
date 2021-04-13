import React from 'react';
import PropTypes from 'prop-types';

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

function CheckBox({name, label, value, onChange}) {
  function inputOnChange(event) {
    onChange(name, event.target.value);
  }
  return (
    <div>
      <input type="checkbox" name={name} checked={value} onChange={inputOnChange} />
      <span> </span>
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default CheckBox;
