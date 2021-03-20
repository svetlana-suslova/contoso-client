import React from 'react';
import PropTypes from 'prop-types';

import dateFormatter from 'helpers/dateFormatter';

Student.propTypes = {
  student: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

function Student({student, onDetailsClick}) {
  const enrollmentDateDisplay = dateFormatter.displayDate(student.enrollmentDate);
  function render() {
    return (
      <tr>
        <td>{student.lastName}</td>
        <td>{student.firstName}</td>
        <td>{enrollmentDateDisplay}</td>
        <td className="tools">
          <button onClick={onDetailsClick}>info</button>
        </td>
      </tr>
    );
  }
  return render();
}
export default Student;
