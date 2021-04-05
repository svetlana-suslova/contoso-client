import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import styled from 'styled-components';
import COMMON from 'constants/literals/common';

import SelectInput from 'components/common/SelectInput';

const FilterBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
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
        <SelectInput label="All" value={departmentId} options={options} onChange={onChange} />
        <Button variant="secondary" size="sm" onClick={onClick}>
          {COMMON.FILTER}
        </Button>
      </FilterBlock>
    );
  }
  return render();
}
export default CoursesFilter;
