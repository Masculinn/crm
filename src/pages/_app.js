import "@/styles/globals.css";
import store from "@/stores";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
