import { AppProps } from "next/app";
import { ThemeProvider } from "../styles/styled-components";
import { GlobalStyle } from "../styles/global-styles";
import { theme } from "../styles/theme";
import "antd/dist/antd.css";
import Head from "next/head";

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

export default App;
