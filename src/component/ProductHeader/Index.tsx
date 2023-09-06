/*
 * @Author: 阿喜
 * @Date: 2023-08-19 02:50:47
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-19 17:18:16
 * @FilePath: \monster-resume\src\component\ProductHeader\Index.tsx
 * @Description:
 *
 */
import { Image } from "antd";
import React from "react";
import imageUrl from "../../aseest/img.png";
export default function Index() {
  return (
    <div className="productHeader">
      <Image
        style={{ objectFit: "cover", borderRadius: "10px" }}
        src={imageUrl.src}
        preview={false}
        width={"80%"}
        height={320}
      ></Image>
      <div className="productHeader__content">
        <div className="content__job">高级前端工程师</div>
        <p style={{ color: "black" }}>
          本模板是一个简约风格的个人简历模板,适用于各种职位的求职者。
        </p>
      </div>
    </div>
  );
}
