import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import AppIcon from 'components/common/AppIcon';
import {colors, Heading} from 'styles/shared';
import classNames from 'classnames';

InstructorCoursesList.propTypes = {
  currentInstructor: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  selectedCourseId: PropTypes.number.isRequired,
  onPointerClick: PropTypes.func.isRequired,
};

function InstructorCoursesList({currentInstructor, visible, selectedCourseId, onPointerClick}) {
  const style = visible ? {display: 'block'} : {display: 'none'};
  const courses = currentInstructor?.courses || [];

  function render() {
    return (
      <div style={style}>
        <Heading>Courses by Selected Instructor</Heading>
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>Number</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr className={classNames({success: selectedCourseId === course.id})} key={course.id}>
                <td className="tools">
                  <Button variant="link" onClick={() => onPointerClick(course.id)}>
                    <AppIcon icon="point" color={colors.black} />
                  </Button>
                </td>
                <td>{course.number}</td>
                <td>{course.title}</td>
                <td>{course.department.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return render();
}
export default InstructorCoursesList;
