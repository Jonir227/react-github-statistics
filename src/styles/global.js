import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic');

  html,
  body {
    height: 100%;
    width: 100%;
    background: #2C2F33;
  },
  input{
    background: inherit;
  },
`;
