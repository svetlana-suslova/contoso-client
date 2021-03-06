import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import AppIcon from 'components/common/AppIcon';
import {colors} from 'styles/shared';

Course.propTypes = {
  course: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

function Course({course, onDetailsClick, onSaveClick, onDeleteClick}) {
  function render() {
    return (
      <tr>
        <td>{course.number}</td>
        <td>{course.title}</td>
        <td>{course.credits}</td>
        <td>{course.department.name}</td>
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
export default Course;
