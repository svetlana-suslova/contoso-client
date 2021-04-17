import React, {useState, useEffect} from 'react';
import {Modal, Button, Form} from 'components/bootstrap';
import Flatpickr from 'react-flatpickr';
import PropTypes from 'prop-types';
import DEPARTMENT from 'constants/literals/departments';
import COMMON from 'constants/literals/common';
import validationHelper from 'helpers/validationHelper';
import TextInput from 'components/common/TextInput';
import NumberInput from 'components/common/NumberInput';
import SelectInput from 'components/common/SelectInput';
import config from 'helpers/configHelper';

const dateOptions = {
  dateFormat: config.format.datePicker,
};

DepartmentSave.propTypes = {
  department: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  saveDepartment: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

function DepartmentSave({department, visible, close, saveDepartment, onChange, options}) {
  useEffect(() => {
    setErrors({name: '', administrator: ''});
  }, [department]);

  const [errors, setErrors] = useState({name: '', administrator: ''});

  function formIsValid() {
    let errors = {name: '', administrator: ''};

    if (!department.name) {
      errors.name = COMMON.NAME_REQ;
    }

    if (!department.instructorId) {
      errors.administrator = COMMON.ADMINISTRATOR_REQ;
    }

    setErrors(errors);

    return validationHelper.isEmptyErrorObject(errors);
  }

  function save() {
    if (!formIsValid()) return;

    saveDepartment();
  }

  function onDateChange(date) {
    onChange('startDate', new Date(date));
  }

  function render() {
    const header = department.id ? DEPARTMENT.EDIT : DEPARTMENT.CREATE;
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <form>
              <TextInput
                name="name"
                label="Name"
                value={department.name}
                onChange={onChange}
                placeholder="Name"
                error={errors.name}
              />
              <NumberInput name="budget" label="Budget" value={Number(department.budget)} onChange={onChange} />
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <div>
                  <Flatpickr
                    key={Date.now()}
                    value={department.startDate}
                    options={dateOptions}
                    onChange={onDateChange}
                  />
                </div>
              </Form.Group>
              <SelectInput
                name="instructorId"
                label="Administrator"
                value={department.instructorId.toString()}
                options={options}
                defaultOption="Select Administrator"
                onChange={onChange}
                error={errors.administrator}
              />
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
export default DepartmentSave;
