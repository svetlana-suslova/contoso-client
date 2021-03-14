import React, {Component} from 'react';
import styled from 'styled-components';

import {screenCenteredContainer} from '../styles/shared';

const StyledError = styled.div`
  ${screenCenteredContainer};
`;

class ErrorBoundary extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
    // eslint-disable-next-line
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledError>
          <h3>Something went wrong</h3>
        </StyledError>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
