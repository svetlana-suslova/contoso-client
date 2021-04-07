import React, {useState, useEffect} from 'react';
import {Modal, Button} from 'components/bootstrap';
import PropTypes from 'prop-types';

import COURSE from 'constants/literals/courses';
import COMMON from 'constants/literals/common';
import validationHelper from 'helpers/validationHelper';
import TextInput from 'components/common/TextInput';
import NumberInput from 'components/common/NumberInput';
import SelectInput from 'components/common/SelectInput';

CourseSave.propTypes = {
  course: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

function CourseSave({course, options, visible, close, saveCourse, onChange}) {
  useEffect(() => {
    setErrors({number: '', title: '', credits: '', department: ''});
  }, [course]);

  const [errors, setErrors] = useState({number: '', title: '', credits: '', department: ''});

  function formIsValid() {
    let errors = {number: '', title: '', credits: '', department: ''};

    if (!course.number) {
      errors.number = COMMON.NUMBER_REQ;
    }

    if (!course.title) {
      errors.title = COMMON.TITLE_REQ;
    }

    if (!course.credits) {
      errors.credits = COMMON.CREDITS_REQ;
    }

    if (!course.department) {
      errors.department = COMMON.DEPARTMENT_REQ;
    }

    setErrors(errors);

    return validationHelper.isEmptyErrorObject(errors);
  }

  function save() {
    if (!formIsValid()) return;

    saveCourse();
  }

  function render() {
    const header = course.id ? COURSE.EDIT : COURSE.CREATE;
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <form>
              <NumberInput
                name="number"
                label="Number"
                value={course.number}
                onChange={onChange}
                error={errors.number}
              />
              <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                placeholder="Title"
                error={errors.title}
              />
              <NumberInput
                name="credits"
                label="Credits"
                value={course.credits}
                onChange={onChange}
                error={errors.credits}
              />
              <div>Department</div>
              <SelectInput
                label="Select Department"
                value={course.departmentId.toString()}
                options={options}
                onChange={onChange}
              />
              {errors.department && <div className="alert alert-danger">{errors.department}</div>}
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
export default CourseSave;
