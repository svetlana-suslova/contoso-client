import React from 'react';
import {Container, Row} from './bootstrap';

import styled from 'styled-components';

const StyledLink = styled.a`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`;

function HomePage() {
  function render() {
    return (
      <Container>
        <div className="jumbotron">
          <h1>Contoso University</h1>
        </div>
        <Row>
          <div className="col-md-4">
            <h2>Welcome to Contoso Express</h2>
            <p>
              Contoso Express is a sample application that demonstrates best practices of modern JavaScript full-stack
              development.
            </p>
          </div>
          <div className="col-md-4">
            <h2>Original Contoso</h2>
            <p>That is remake of famous in .NET world Contoso Express project.</p>
            <p>
              Generally data base schema and functionality stays the same; UI is a bit updated as project demonstrates
              SPA techniques for client side.
            </p>
            <p>
              <StyledLink
                className="btn btn-default"
                href="http://www.asp.net/mvc/tutorials/getting-started-with-ef-using-mvc/">
                See original tutorial here &raquo;
              </StyledLink>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Source</h2>
            <p>See the latest source code on GitHub.</p>
            <p>
              <StyledLink className="btn btn-default" href="https://github.com/yegor-sytnyk/contoso-express">
                Check out source code on github &raquo;
              </StyledLink>
            </p>
          </div>
        </Row>
      </Container>
    );
  }
  return render();
}

export default HomePage;
