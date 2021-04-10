import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import DisplayRow from 'components/common/DisplayRow';
import COMMON from 'constants/literals/common';
import DEPARTMENT from 'constants/literals/courses';
import personHelper from 'helpers/personHelper';
import currencyHelper from 'helpers/currencyHelper';
import dateHelper from 'helpers/dateHelper';

DepartmentDetails.propTypes = {
  currentDepartment: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function DepartmentDetails({currentDepartment, visible, close}) {
  const fullName = currentDepartment.instructor
    ? personHelper.fullName(currentDepartment.instructor.firstName, currentDepartment.instructor.lastName)
    : '';
  const budget = currencyHelper.money(currentDepartment.budget);
  const date = currentDepartment.startDate ? dateHelper.displayDate(currentDepartment.startDate) : null;

  function render() {
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{DEPARTMENT.DETAILS}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <DisplayRow label="Name" value={currentDepartment.name} />
              <DisplayRow label="Budget" value={budget} />
              <DisplayRow label="Start Date" value={date} />
              <DisplayRow label="Administrator" value={fullName} />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={close}>
              {COMMON.CLOSE}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return render();
}
export default DepartmentDetails;
