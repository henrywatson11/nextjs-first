// pages/_app.js

import styles from '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // You can add layout components, global state, or context providers here

  return <Component {...pageProps} />;
}

export default MyApp;
