/*
 * @Author: 阿喜
 * @Date: 2023-08-20 00:18:44
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-20 00:35:54
 * @FilePath: \monster-resume\src\component\From\index.tsx
 * @Description:
 *
 */
import { Image } from "antd";
import imageUrl from "../../../src/aseest/img3.png";
export default function Index() {
  return (
    <div className="from__container">
      <div className="bg__img">
        <Image
          src={imageUrl.src}
          height={200}
          width={"100%"}
          style={{ objectFit: "cover" }}
          preview={false}
        ></Image>
      </div>
      <div className="contact">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "black", textAlign: "center" }}>联系我</h1>
          <h2 style={{ color: "black" }}>电子邮箱:tompanghu@gmail.com</h2>
          <h3 style={{ color: "black" }}>如果您对我的工作经历感兴趣 请和我联系 谢谢。</h3>
        </div>
      </div>
    </div>
  );
}
