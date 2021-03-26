import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import DisplayRow from 'components/common/DisplayRow';
import dateHelper from 'helpers/dateHelper';
import COMMON from 'constants/literals/common';
import STUDENT from 'constants/literals/students';

StudentDetails.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function StudentDetails({currentStudent, visible, close}) {
  let enrollmentDateDisplay = currentStudent.enrollmentDate
    ? dateHelper.displayDate(currentStudent.enrollmentDate)
    : null;

  function render() {
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{STUDENT.DETAILS}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <DisplayRow label="Last Name" value={currentStudent.lastName} />
              <DisplayRow label="First Name" value={currentStudent.firstName} />
              <DisplayRow label="Enrollment Date" value={enrollmentDateDisplay} />
              {!isEmpty(currentStudent.enrollments) ? (
                <>
                  <DisplayRow label="Enrollments" value="" />
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Course Title</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentStudent.enrollments.map((enrollment) => (
                        <tr key={enrollment.id}>
                          <td>{enrollment.course.title}</td>
                          <td>{enrollment.grade ? enrollment.grade : STUDENT.NO_GRADE}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : null}
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
export default StudentDetails;
