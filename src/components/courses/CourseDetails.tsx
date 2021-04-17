import React from 'react';
import {Modal, Button, Container} from 'components/bootstrap';
import PropTypes from 'prop-types';
import DisplayRow from 'components/common/DisplayRow';
import COMMON from 'constants/literals/common';
import COURSE from 'constants/literals/courses';

CourseDetails.propTypes = {
  currentCourse: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

function CourseDetails({currentCourse, visible, close}) {
  let departmentName = currentCourse?.department?.name;
  let courseNumber = currentCourse?.number?.toString();
  let courseTitle = currentCourse?.title;
  let courseCredits = currentCourse?.credits?.toString();

  function render() {
    return (
      <div>
        <Modal show={visible}>
          <Modal.Header closeButton onClick={close}>
            <Modal.Title>{COURSE.DETAILS}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <DisplayRow label="Department" value={departmentName} />
              <DisplayRow label="Number" value={courseNumber} />
              <DisplayRow label="Title" value={courseTitle} />
              <DisplayRow label="Credits" value={courseCredits} />
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
export default CourseDetails;
