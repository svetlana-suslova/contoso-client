import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import DisplayRow from 'components/common/DisplayRow';
import dateFormatter from 'helpers/dateFormatter';

StudentDetails.propTypes = {
  currentStudent: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function StudentDetails({currentStudent, visible, close}) {
  const enrollmentDateDisplay = dateFormatter.formatDate(currentStudent.enrollmentDate);

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
                          <td>{enrollment.grade ? enrollment.grade : 'No grade'}</td>
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
