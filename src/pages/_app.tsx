/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:49:57
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-19 20:22:05
 * @FilePath: \monster-resume\src\pages\_app.tsx
 * @Description:
 *
 */
import "@/styles/globals.less";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
