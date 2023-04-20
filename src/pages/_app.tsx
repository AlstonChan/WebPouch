import type { AppProps } from "next/app";
import { NextPage } from "next";

import { ReactElement, ReactNode } from "react";

import MainLayout from "@/components/MainLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;
}
