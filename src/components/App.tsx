import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {isEmpty, get} from 'lodash';

import AppPage from 'components/common/AppPage';
import dateFormatter from 'helpers/dateFormatter';
import ErrorBoundary from './ErrorBoundary';
import Confirm from 'components/common/Confirm';
import {AppState} from 'reducers/rootReducer';
import {confirmActionCancel} from 'actions/commonActions';

import 'styles/App.scss';
import styled from 'styled-components';

const StyledUiBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.3;
  filter: alpha(opacity=30);
  z-index: 999;
`;

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

function App(props) {
  const asyncAction = useSelector((state: AppState) => state.common.asyncAction);
  const confirmAction = useSelector((state: AppState) => state.common.confirmAction);

  const dispatch = useDispatch();

  function cancelAction() {
    dispatch(confirmActionCancel());
  }

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
    let showOverlay = get(asyncAction, 'showOverlay', false);
    return (
      <ErrorBoundary>
        {showOverlay && <StyledUiBlock />}
        {confirmAction && (
          <Confirm
            title={confirmAction.title}
            text={confirmAction.text}
            visible={true}
            action={async () => {
              cancelAction();
              await confirmAction.action();
            }}
            close={cancelAction}
          />
        )}
        <div id="page-body" className="container-fluid">
          <Switch>{props.routes.map((route, index: number) => renderRoute(route, index))}</Switch>
          {props.children}
          <div className="container">
            <hr />
            <p>&copy; {dateFormatter.displayCurrentYear()} - Contoso University</p>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
  return render();
}
export default App;
