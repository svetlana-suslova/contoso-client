import React from 'react';
import {Container, Row} from './bootstrap';
import config from 'helpers/configHelper';
import styled from 'styled-components';
import {colors} from 'styles/shared';

const StyledLink = styled.a`
  background-color: ${colors.white};
  border-color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey_lighter};
    border-color: ${colors.grey_light};
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
              <StyledLink className="btn btn-default" href={config.externalLinks.tutorial}>
                See original tutorial here &raquo;
              </StyledLink>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Source</h2>
            <p>See the latest source code on GitHub.</p>
            <p>
              <StyledLink className="btn btn-default" href={config.externalLinks.github}>
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
