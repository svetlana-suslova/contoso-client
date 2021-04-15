import React from 'react';
import PropTypes from 'prop-types';
import {Heading} from 'styles/shared';
import personHelper from 'helpers/personHelper';

InstructorStudentsList.propTypes = {
  enrollments: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

function InstructorStudentsList({enrollments, visible}) {
  let style = visible ? {display: 'block'} : {display: 'none'};

  function render() {
    return (
      <div style={style}>
        <Heading>Students in Selected Course</Heading>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id}>
                <td>
                  {enrollment.student
                    ? personHelper.fullName(enrollment.student.firstName, enrollment.student.lastName)
                    : 'No students'}
                </td>
                <td>{enrollment.grade ? enrollment.grade : 'No grade'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return render();
}
export default InstructorStudentsList;
