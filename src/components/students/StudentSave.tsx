import React from 'react';
import {Modal, Button} from 'components/bootstrap';
import PropTypes from 'prop-types';

StudentSave.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  saveStudent: PropTypes.func.isRequired,
};

function StudentSave({currentStudent, visible, close, saveStudent}) {
  function render() {
    const header = currentStudent.id ? 'Edit Student' : 'Create Student';
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid"></Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={saveStudent}>
              Save
            </Button>
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
export default StudentSave;
