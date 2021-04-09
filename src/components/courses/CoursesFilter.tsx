import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import styled from 'styled-components';
import COMMON from 'constants/literals/common';

const FilterBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const Select = styled.select`
  width: 200px;
  margin-right: 10px;
  margin-left: 10px;
`;

CoursesFilter.propTypes = {
  departmentId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

function CoursesFilter({departmentId, options, onChange, onClick}) {
  function render() {
    return (
      <FilterBlock>
        <span>Select Department:</span>
        <Select value={departmentId} onChange={onChange}>
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </Select>
        <Button variant="secondary" size="sm" onClick={onClick}>
          {COMMON.FILTER}
        </Button>
      </FilterBlock>
    );
  }
  return render();
}
export default CoursesFilter;
