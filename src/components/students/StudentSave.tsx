import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'components/bootstrap';
import PropTypes from 'prop-types';
import TextInput from 'components/common/TextInput';
import validationHelper from 'helpers/validationHelper';

StudentSave.propTypes = {
  student: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  saveStudent: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

function StudentSave({student, visible, close, saveStudent, onChange}) {
  useEffect(() => {
    setErrors({lastName: '', firstName: ''});
  }, [student]);

  const [errors, setErrors] = useState({lastName: '', firstName: ''});

  function formIsValid() {
    let errors = {lastName: '', firstName: ''};

    if (!student.lastName) {
      errors.lastName = 'Last Name field is required!';
    }

    if (!student.firstName) {
      errors.firstName = 'First Name field is required!';
    }

    setErrors(errors);

    return validationHelper.isEmptyErrorObject(errors);
  }

  function save() {
    if (!formIsValid()) return;

    saveStudent();
  }
  function render() {
    const header = student.id ? 'Edit Student' : 'Create Student';
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <form>
              <TextInput
                name="lastName"
                label="Last Name"
                value={student.lastName}
                onChange={onChange}
                placeholder="Last Name"
                error={errors.lastName}
              />
              <TextInput
                name="firstName"
                label="First Name"
                value={student.firstName}
                onChange={onChange}
                placeholder="First Name"
                error={errors.firstName}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={save}>
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
