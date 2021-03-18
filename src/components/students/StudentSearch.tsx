import React from 'react';
import PropTypes from 'prop-types';
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
        {search && <input type="button" value="Clear search" onClick={onClearSearch} />}
        <SearchInput type="text" value={search} onChange={onChange} onKeyPress={onKeyPress} />
        <input type="submit" value="Search" onClick={onSearch} />
      </SearchBlock>
    );
  }
  return render();
}
export default StudentSearch;
