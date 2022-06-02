import styled from 'styled-components';
import { IStyle } from '../../ts-types/styleTypes';

const LayoutStyle = styled.main<IStyle>`
  position: relative;
  display: block;

  height: 100vh;
  width: 100%;
  max-width: 1500px;
  padding: 0 -15px;
  margin: auto;

  @media (min-width: 576px) {
    display: flex;
  }
`;

export default LayoutStyle;