import React from 'react';
import {Row, Col} from 'components/bootstrap';
import PropTypes from 'prop-types';

const DisplayRow = ({label, value}) => {
  return (
    <Row>
      <Col className="col-md-4">{label}:</Col>
      <Col className="col-md-8">{value}</Col>
    </Row>
  );
};

DisplayRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default DisplayRow;
