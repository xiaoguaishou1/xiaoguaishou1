/*
 * @Author: panghu 760695955@qq.com
 * @Date: 2023-08-20 00:24:06
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 16:05:59
 * @FilePath: /xiaoguaishou1/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:49:57
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 00:10:59
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
import { FloatButton } from "antd";

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <ProductHeader />
      <Features />
      <Testmoial />
      <FormIndex></FormIndex>
      {/* <Footer></Footer> */}
      <FloatButton.BackTop />
    </main>
  );
}
