/*
 * @Author: 阿喜
 * @Date: 2023-08-19 20:15:11
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-19 22:23:05
 * @FilePath: \monster-resume\src\component\Features\Index.tsx
 * @Description:
 *
 */
import { Image } from "antd";
import imageUrl from "../../aseest/img2.png";
import { useState } from "react";
export default function Index() {
  const [item, setItem] = useState<
    {
      title: string;
      content: string;
    }[]
  >([
    {
      title: "简约风格设计",
      content: "模板采用简约风格设计,简洁大方,易于阅读.",
    },
    {
      title: "简约风格设计",
      content: "模板采用简约风格设计,简洁大方,易于阅读.",
    },
  ]);

  return (
    <div className="features__container">
      <div className="content">
        <h1>Features</h1>
        <p>我们的个人简历模板拥有以下特色:</p>
        <div className="content__item">
          {item.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="features_img">
        <Image
          style={{ borderRadius: "10px", objectFit: "cover" }}
          src={imageUrl.src}
          preview={false}
        ></Image>
      </div>
    </div>
  );
}
