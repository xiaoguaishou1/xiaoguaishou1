/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:49:57
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-06 17:08:06
 * @FilePath: \monster-resume\src\pages\index.tsx
 * @Description:
 *
 */
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/component/NavBar/NavBar";
import ProductHeader from "@/component/ProductHeader/Index";
import Features from "@/component/Features/Index";
import Testmoial from "@/component/Testmonial/Index";
import FormIndex from "@/component/From/Index";
import Footer from "@/component/Footer/Index";
export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <ProductHeader />
      <Features />
      <Testmoial />
      <FormIndex></FormIndex>
      <Footer></Footer>
    </main>
  );
}
