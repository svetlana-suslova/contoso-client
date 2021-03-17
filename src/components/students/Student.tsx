import React from 'react';
import PropTypes from 'prop-types';

import dateFormatter from 'helpers/dateFormatter';

Student.propTypes = {
  student: PropTypes.object.isRequired,
};

function Student({student}) {
  const enrollmentDateDisplay = dateFormatter.displayDate(student.enrollmentDate);
  function render() {
    return (
      <tr>
        <td>{student.lastName}</td>
        <td>{student.firstName}</td>
        <td>{enrollmentDateDisplay}</td>
      </tr>
    );
  }
  return render();
}
export default Student;
