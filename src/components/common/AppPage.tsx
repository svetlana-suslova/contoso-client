import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from 'components/Navigation';

AppPage.propTypes = {
  children: PropTypes.object.isRequired,
};

function AppPage(props) {
  function render() {
    return (
      <div>
        <Helmet title="Contoso Express" />
        <Navigation />
        {props.children}
      </div>
    );
  }
  return render();
}
export default AppPage;
