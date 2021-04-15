import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';

import {faInfo, faTrashAlt, faPencilAlt, faHandPointUp} from '@fortawesome/free-solid-svg-icons';

let map = {
  info: faInfo,
  delete: faTrashAlt,
  edit: faPencilAlt,
  point: faHandPointUp,
};

const unknownIcon = faQuestionCircle;

function AppIcon(props) {
  let icon = unknownIcon;

  if (map[props.icon]) {
    icon = map[props.icon];
  }

  return <FaIcon {...props} icon={icon} />;
}

AppIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default AppIcon;
