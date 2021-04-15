import React from 'react';
import {Button} from 'components/bootstrap';
import PropTypes from 'prop-types';
import AppIcon from 'components/common/AppIcon';
import dateHelper from 'helpers/dateHelper';
import {colors} from 'styles/shared';

Student.propTypes = {
  student: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

function Student({student, onDetailsClick, onSaveClick, onDeleteClick}) {
  const enrollmentDateDisplay = dateHelper.displayDate(student.enrollmentDate);
  function render() {
    return (
      <tr>
        <td>{student.lastName}</td>
        <td>{student.firstName}</td>
        <td>{enrollmentDateDisplay}</td>
        <td className="tools">
          <Button variant="link" onClick={onDetailsClick}>
            <AppIcon icon="info" color={colors.black} />
          </Button>
          <Button variant="link" onClick={onSaveClick}>
            <AppIcon icon="edit" size="sm" color={colors.black} />
          </Button>
          <Button variant="link" onClick={onDeleteClick}>
            <AppIcon icon="delete" size="sm" color={colors.black} />
          </Button>
        </td>
      </tr>
    );
  }
  return render();
}
export default Student;
