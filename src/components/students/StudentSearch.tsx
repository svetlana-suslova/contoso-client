import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import styled from 'styled-components';

const SearchBlock = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SearchInput = styled.input`
  margin-right: 10px;
  margin-left: 10px;
`;

StudentSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onClearSearch: PropTypes.func.isRequired,
};

function StudentSearch({search, onChange, onKeyPress, onSearch, onClearSearch}) {
  function render() {
    return (
      <SearchBlock>
        {!search && <span>Find by name :</span>}
        {search && (
          <Button variant="light" size="sm" onClick={onClearSearch}>
            Clear
          </Button>
        )}
        <SearchInput type="text" value={search} onChange={onChange} onKeyPress={onKeyPress} />
        <Button variant="secondary" size="sm" onClick={onSearch}>
          Search
        </Button>
      </SearchBlock>
    );
  }
  return render();
}
export default StudentSearch;
