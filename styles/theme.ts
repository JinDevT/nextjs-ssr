const colors = {
  b070: "rgba(0, 0, 0, 0.7)",
  b087: "#212121",
  g050: "#9c9ca7",
  g030: "#c3c3ca",
  g065: "#7e7e8c",
  g015: "#e1e1e5",
  g006: "#f3f3f5",
  bn100: "#1f3049",
  b015: "rgba(0, 0, 0, 0.15)",
  b050: "rgba(0, 0, 0, 0.5)",
  dn100: "#0f1c2f",
  mg100: "#00c690",
  ng080: "#565e6b",
  mg080: "#33d1a6",
  mg030: "#b2eedd",
  mg015: "#d9f7ee",
  mg006: "#f0fcf9",
  jg100: "#009a70",
  sg080: "rgba(0, 190, 103, 0.8)",
  gb060: "rgba(56, 56, 56, 0.6)",
  w100: "#ffffff",
  w090: "rgba(255, 255, 255, 0.9)",
  w070: "rgba(255, 255, 255, 0.7)",
  w040: "rgba(255, 255, 255, 0.4)",
  w020: "rgba(255, 255, 255, 0.2)",
  wsg100: "#fcfcfd",
  ws100: "#f8f9fa",
  sb070: "#727dd5",
  db100: "#3182f6",
  sb050: "#b8bdea",
  db006: "#f3f8ff",
  lg100: "#71d104",
  lg050: "#b7e892",
  lb100: "#00c4ff",
  lb050: "#8fe1fe",
  so100: "#ff8900",
  so050: "#fec491",
  lc100: "#ff5c81",
  lc050: "#feadc0",
  r100: "#ef4949",
  kakaoy: "#fae300",
  facebook: "#2e6db5",
  kakaob: "#391b1b",
  shadows: "rgba(33, 40, 74, 0.1)",
};

const breakPoint = {
  Tablet: "768px",
  MobileS: "320px",
  MobileM: "420px",
};

const fonts = {
  text_1_bold: "font-size: 32px; line-height: 1.38; font-weight: 600;",
  text_2_bold: "font-size: 24px; line-height: 1.42; font-weight: 600;",
  text_3_bold: "font-size: 18px; line-height: 1.34; font-weight: 600;",
  text_4_bold:
    "font-size: 16px; line-height: 1.5; font-weight: 600; letter-spacing: -0.16px;",
  text_5_bold: "font-size: 14px; line-height: 1.57; font-weight: 600;",
  text_6_bold: "font-size: 12px; line-height: 1.5; font-weight: 600;",
  text_7_regular: "font-size: 14px; line-height: 1.21; font-weight: 400;",
  text_8_regular: "font-size: 12px; line-height: 1.5; font-weight: 400;",
};

export interface StyleTheme {
  colors: { [key in keyof typeof colors]: string };
  breakPoint: { [key in keyof typeof breakPoint]: string };
  fonts: { [key in keyof typeof fonts]: string };
}

const theme: StyleTheme = {
  colors,
  breakPoint,
  fonts,
};

export { theme };
