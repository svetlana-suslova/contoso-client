import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import AppIcon from 'components/common/AppIcon';
import {colors} from 'styles/shared';
import dateHelper from 'helpers/dateHelper';

Instructor.propTypes = {
  instructor: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

function Instructor({instructor, onDetailsClick, onSaveClick, onDeleteClick}) {
  const office = instructor.officeAssignment ? instructor.officeAssignment.location : '';
  const date = dateHelper.displayDate(instructor.hireDate);

  function render() {
    return (
      <tr>
        <td>{instructor.lastName}</td>
        <td>{instructor.firstName}</td>
        <td>{date}</td>
        <td>{office}</td>
        <td>
          {instructor.courses.map((course) => (
            <div key={course.id}>
              {course.number}&nbsp;{course.title}
            </div>
          ))}
        </td>
        <td className="tools">
          <Button variant="link" onClick={onDetailsClick}>
            <AppIcon icon="info" color={colors.black} />
          </Button>
          <Button variant="link" onClick={onSaveClick}>
            <AppIcon icon="edit" color={colors.black} />
          </Button>
          <Button variant="link" onClick={onDeleteClick}>
            <AppIcon icon="delete" color={colors.black} />
          </Button>
        </td>
      </tr>
    );
  }
  return render();
}
export default Instructor;
