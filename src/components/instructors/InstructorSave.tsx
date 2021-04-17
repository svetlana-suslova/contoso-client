import React, {useState, useEffect} from 'react';
import {Modal, Button, Form} from 'components/bootstrap';
import Flatpickr from 'react-flatpickr';
import _ from 'lodash';
import PropTypes from 'prop-types';
import INSTRUCTOR from 'constants/literals/instructors';
import COMMON from 'constants/literals/common';
import validationHelper from 'helpers/validationHelper';
import TextInput from 'components/common/TextInput';
import config from 'helpers/configHelper';
import CheckBox from 'components/common/CheckBox';

const dateOptions = {
  dateFormat: config.format.datePicker,
};

InstructorSave.propTypes = {
  instructor: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  saveInstructor: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

function InstructorSave({instructor, visible, close, saveInstructor, onChange, options}) {
  useEffect(() => {
    setErrors({firstName: '', lastName: ''});
  }, [instructor]);

  const office = instructor.officeAssignment?.location || '';
  const [errors, setErrors] = useState({firstName: '', lastName: ''});

  function formIsValid() {
    let errors = {firstName: '', lastName: ''};

    if (!instructor.firstName) {
      errors.firstName = COMMON.FIRST_NAME_REQ;
    }

    if (!instructor.lastName) {
      errors.lastName = COMMON.LAST_NAME_REQ;
    }

    setErrors(errors);

    return validationHelper.isEmptyErrorObject(errors);
  }

  function save() {
    if (!formIsValid()) return;

    saveInstructor();
  }

  function onDateChange(date) {
    onChange('hireDate', new Date(date));
  }

  function isCheckedCourse(courseId) {
    let checked = _.find(instructor.courses, (course) => {
      return course.id === courseId;
    });

    return checked ? true : false;
  }

  function render() {
    const header = instructor.id ? INSTRUCTOR.EDIT : INSTRUCTOR.CREATE;
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
                value={instructor.lastName}
                onChange={onChange}
                placeholder="Last Name"
                error={errors.lastName}
              />
              <TextInput
                name="firstName"
                label="First Name"
                value={instructor.firstName}
                onChange={onChange}
                placeholder="First Name"
                error={errors.firstName}
              />
              <Form.Group>
                <Form.Label>Hire Date</Form.Label>
                <div>
                  <Flatpickr
                    key={Date.now()}
                    value={instructor.hireDate}
                    options={dateOptions}
                    onChange={onDateChange}
                  />
                </div>
              </Form.Group>
              <TextInput
                name="location"
                label="Office Location"
                value={office}
                onChange={onChange}
                placeholder="Office Location"
              />
              <Form.Group>
                <Form.Label>Courses</Form.Label>
                {options.map((option) => (
                  <CheckBox
                    key={option.value}
                    name={option.value.toString()}
                    label={option.text}
                    value={isCheckedCourse(option.value)}
                    onChange={onChange}
                  />
                ))}
              </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" onClick={save}>
              {COMMON.SAVE}
            </Button>
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
export default InstructorSave;
