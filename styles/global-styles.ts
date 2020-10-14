import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    /* 전체 선택자 */
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    font: inherit;
    vertical-align: baseline;
    font-family: "Noto Sans KR","Roboto", sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    display: block;
  }
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* 하이퍼 링크 스타일 */
  a {
    color: inherit;
    text-decoration: none;
    /* cursor: crosshair; */
  }
  /* 기본 레이아웃 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* 숨김 */
  .readable-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }
  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: none;
  }
  /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
  input::-ms-clear {
    display: none;
  }
  /* input type number 에서 화살표 제거 */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:-webkit-autofill,
  input:focus:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #ffffff inset;
  }
  /* Select box 스타일 초기화 */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* IE 에서 Select box 화살표 제거 */
  select::-ms-expand {
    display: none;
  }
  button {
    background: none;
    border: 0;
    color: inherit;
    /* cursor: default; */
    font: inherit;
    overflow: visible;
    padding: 0;
    -webkit-appearance: button; /* for input */
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
    outline: none;
  }

`;
