import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import DisplayRow from 'components/common/DisplayRow';
import COMMON from 'constants/literals/common';
import INSTRUCTOR from 'constants/literals/instructors';
import dateHelper from 'helpers/dateHelper';

InstructorDetails.propTypes = {
  currentInstructor: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function InstructorDetails({currentInstructor, visible, close}) {
  const office = currentInstructor?.officeAssignment?.location || 'No office';
  const date = currentInstructor?.hireDate ? dateHelper.displayDate(currentInstructor.hireDate) : null;

  function render() {
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{INSTRUCTOR.DETAILS}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <DisplayRow label="Last Name" value={currentInstructor.lastName} />
              <DisplayRow label="First Name" value={currentInstructor.firstName} />
              <DisplayRow label="Hire Date" value={date} />
              <DisplayRow label="Office Location" value={office} />
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
export default InstructorDetails;
