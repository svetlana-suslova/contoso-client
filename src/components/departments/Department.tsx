import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/bootstrap';
import AppIcon from 'components/common/AppIcon';
import {colors} from 'styles/shared';
import personHelper from 'helpers/personHelper';
import currencyHelper from 'helpers/currencyHelper';
import dateHelper from 'helpers/dateHelper';

Department.propTypes = {
  department: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

function Department({department, onDetailsClick, onSaveClick, onDeleteClick}) {
  const fullName = department.instructor
    ? personHelper.fullName(department.instructor.firstName, department.instructor.lastName)
    : '';
  const budget = currencyHelper.money(department.budget);
  const date = dateHelper.displayDate(department.startDate);

  function render() {
    return (
      <tr>
        <td>{department.name}</td>
        <td>{budget}</td>
        <td>{date}</td>
        <td>{fullName}</td>
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
export default Department;
