import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard-Light';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
      font-weight: 100;
      font-style: normal;
  }
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
  }
  @font-face {
      font-family: 'Pretendard-Bold';
      src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-size: ${props => props.theme.fontSize.md};
    font-family:${props => props.theme.font.regular};
		background: ${props => props.theme.colors['bg-color']};
		color:${props => props.theme.colors['text-primary']}
  }

	button,
  input,
  select,
  textarea {
    border: none;
    background: ${props => props.theme.colors['bg-color']};
    color: ${props => props.theme.colors['text-primary']};
  }

  button {
    padding:0;
    cursor: pointer;
    user-select: none;
    font-family: ${props => props.theme.font.medium};
  }

  a:visited {
    color: ${props => props.theme.colors['text-primary']};
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
