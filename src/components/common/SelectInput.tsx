import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  width: 200px;
  margin-right: 10px;
  margin-left: 10px;
`;

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function SelectInput({value, onChange, options, label}) {
  return (
    <Select value={value} onChange={onChange}>
      <option value="">{label}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </Select>
  );
}
export default SelectInput;
