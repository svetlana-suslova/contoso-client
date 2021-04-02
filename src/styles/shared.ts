import {css} from 'styled-components';
import styled from 'styled-components';

export const screenCenteredContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  width: 400px;
  height: 400px;
`;

export const Heading = styled.h1`
  margin: 20px 0;
  font-size: 2rem;
}
`;

export const colors = {
  black: '#000000',
  white: '#fff',
  grey: '#ccc',
  grey_light: '#adadad',
  grey_lighter: '#e6e6e6',
};
