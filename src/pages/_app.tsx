import "@/styles/globals.scss";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import nookies from "nookies";
import MuiThemeProvider from "../../mui-theme/MuiThemeProvider";
import { CssBaseline } from "@mui/material";

export interface CustomAppProps extends AppProps {
  user?: null | string;
  hasToken?: boolean;
}

export default function CustomApp({
  user,
  hasToken,
  Component,
  pageProps,
}: CustomAppProps) {
  return (
    <MuiThemeProvider>
      <CssBaseline />
    
   
        <Component {...pageProps} />
     
    </MuiThemeProvider>
  );
}

CustomApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const cookies = nookies.get(context.ctx);

  return { ...appProps };
};
