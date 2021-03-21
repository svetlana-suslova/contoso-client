import React from 'react';
import {Row} from 'components/bootstrap';
import PropTypes from 'prop-types';

const DisplayRow = ({label, value}) => {
  return (
    <Row>
      <label className="col-md-4 form-label">{label}:</label>
      <div className="col-md-8">{value}</div>
    </Row>
  );
};

DisplayRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default DisplayRow;
