import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Nanum Gothic', Prata;
    src: url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Prata&subset=korean');
  }

  body {
    font-family: 'Nanum Gothic';
    color: #ffffff;
    background: #2C2F33;
  }
  h1, h2, h3 {
    font-family: Prata;
  }
  a {
    text-decoration: none;
  }
`;
