import { css } from '@emotion/react';
// import 'the-new-css-reset/css/reset.css';
// import 'normalize.css';

export const GlobalStyles = css`
:root {
  font-family: Roboto, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  @media (prefers-color-scheme: light) {
    color: #213547;
    background-color: #ffffff;
  }
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  }
`;
