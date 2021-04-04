import React from 'react';
import PropTypes from 'prop-types';

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

function Course({course}) {
  function render() {
    return (
      <tr>
        <td>{course.number}</td>
        <td>{course.title}</td>
        <td>{course.credits}</td>
        <td>{course.department.name}</td>
      </tr>
    );
  }
  return render();
}
export default Course;
