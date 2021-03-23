import React from 'react';
import {Modal, Button} from 'components/bootstrap';
import PropTypes from 'prop-types';

Confirm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool,
  action: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

function Confirm({title, text, visible, action, close}) {
  let displayTitle = title ? title : 'Confirmation';
  let displayMessage = text ? text : 'Are you sure ?';

  return (
    <Modal show={visible} backdrop="static" onHide={close}>
      <Modal.Header closeButton>{displayTitle}</Modal.Header>
      <Modal.Body>
        <h4>{displayMessage}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={close}>
          No
        </Button>
        <Button variant="danger" size="sm" onClick={action}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirm;
