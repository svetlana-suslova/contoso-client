import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';

import AppPage from 'components/common/AppPage';

import 'styles/App.scss';

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

function App(props) {
  const date = '2021';

  function renderRoute(route, index: number) {
    const {pageProps, component: Component} = route;
    const wrapInAppPage = !isEmpty(pageProps);

    let render = (props) => <Component {...props} />;

    if (wrapInAppPage) {
      render = (props) => (
        <AppPage {...pageProps}>
          <Component {...props} />
        </AppPage>
      );
    }

    return <Route key={index} exact={route.exact} path={route.path} render={render} />;
  }

  function render() {
    return (
      <div id="page-body" className="container-fluid">
        <Switch>{props.routes.map((route, index: number) => renderRoute(route, index))}</Switch>
        {props.children}
        <div className="container">
          <hr />
          <p>&copy; {date} - Contoso University</p>
        </div>
      </div>
    );
  }

  return render();
}

export default App;
