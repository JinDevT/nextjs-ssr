import { AppProps } from "next/app";
import { ThemeProvider } from "../styles/styled-components";
import { GlobalStyle } from "../styles/global-styles";
import { theme } from "../styles/theme";
import "antd/dist/antd.css";
import Head from "next/head";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";

// App이 최상의 부모 component라고 생각하면됨.
// 공통적으로 사용하는 것을 _app.tsx에 모아둔다.
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>nextjs + typescript</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// 예전에는 Provider로 감싸줬는데, 6버전 이후에는 알아서 감싸준다.
// withRedux hoc로 감싸고
// saga를 사용할 때는 withReduxSaga로 감싼다.
export default wrapper.withRedux(withReduxSaga(App));
