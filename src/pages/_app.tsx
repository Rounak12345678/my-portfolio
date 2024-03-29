import { IsCheckdIn } from "@/redux-tookit/slice/userSlice";
import { store } from "@/redux-tookit/store/store";
import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import nookies from "nookies"

export interface CustomAppProps extends AppProps {
  user?:null | string;
  hasToken?: boolean;

}


export default function CustomApp({user,hasToken, Component, pageProps }: CustomAppProps) {
  const queryClient = new QueryClient();

  store.dispatch(IsCheckdIn({hasToken,user}))

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}


CustomApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const cookies = nookies.get(context.ctx);
  let hasToken = false;
  let user = null;
  if (cookies?.token) {
    hasToken = true;
    user = cookies?.token
  }


  return { ...appProps, hasToken, user };
};
