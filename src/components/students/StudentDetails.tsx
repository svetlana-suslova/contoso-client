import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import DisplayRow from 'components/common/DisplayRow';

StudentDetails.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function StudentDetails({currentStudent, visible, close}) {
  function render() {
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>Student Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <DisplayRow label="Last Name" value={currentStudent.lastName} />
              <DisplayRow label="First Name" value={currentStudent.firstName} />
              <DisplayRow label="Enrollment Date" value={currentStudent.enrollmentDate} />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  return render();
}
export default StudentDetails;
