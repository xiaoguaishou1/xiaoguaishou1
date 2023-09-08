/*
 * @Author: 阿喜
 * @Date: 2023-08-19 02:50:47
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-09 00:49:48
 * @FilePath: \monster-resume\src\component\ProductHeader\Index.tsx
 * @Description:
 *
 */
import { Application } from "@splinetool/runtime";
import { Button, Descriptions, DescriptionsProps, Image, Timeline } from "antd";
import React, { useState } from "react";
import imageUrl from "../../aseest/img.png";
export default function Index() {
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "姓名",
      children: "杨鑫瑀",
    },
    {
      key: "2",
      label: "年龄",
      children: "26岁",
    },
    {
      key: "3",
      label: "居住地",
      children: "四川省, 成都市",
    },
    {
      key: "4",
      label: "专业",
      children: "计算机",
    },
    {
      key: "5",
      label: "毕业院校",
      children: "四川托普学院",
    },
    {
      key: "6",
      label: "工作经验",
      children: "5年",
    },
  ];
  return (
    <div className="productHeader">
      {/* <Image
        style={{ objectFit: "cover", borderRadius: "10px" }}
        src={imageUrl.src}
        preview={false}
        width={"80%"}
        height={320}
      ></Image> */}
      <App></App>
      <div
        style={{
          marginTop: "40px",
          width: "80%",
        }}
      >
        <div className="productHeader__content">
          <div className="content__job">高级前端工程师</div>
          <Descriptions title="此页面使用Nextjs构建 figma设计" items={items} />;
        </div>
        <Timeline
          style={{ marginTop: "30px" }}
          items={[
            {
              children:
                "成都西南交大研究院有限公司(前端组长) 2022年-10月 - 2023年-09月",
            },
            {
              children:
                "星云飞救(成都)医疗科技股份有限公司(前端工程师) 2020年-01月 - 2022年-07月",
            },
            {
              children:
                "武汉荟恩网络科技有限公司(前端工程师) 2019年-01月 - 2020年-01月",
            },
          ]}
        ></Timeline>
      </div>
    </div>
  );
}

import { useRef } from "react";
import Spline from "@splinetool/react-spline";

function App() {
  function onLoad(spline: { findObjectByName: (arg0: string) => any }) {
    const obj = spline.findObjectByName("Cube");
    let lastScrollY = window.scrollY;
    let isAtTop = true; // 用于跟踪是否在顶部
    let animationFrameId: number;

    function smoothScroll() {
      const currentScrollY = window.scrollY;
      if (obj) {
        if (currentScrollY > lastScrollY) {
          // 向下滚动
          obj.position.y += 1;
          isAtTop = false;
        } else if (currentScrollY < lastScrollY) {
          // 向上滚动
          obj.position.y -= 1;
        }

        // 如果滚动到了顶部，重置Y轴位置
        if (currentScrollY === 0 && !isAtTop) {
          obj.position.y = 0;
          isAtTop = true;
        }

        lastScrollY = currentScrollY;
        console.log(obj, "obj");
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    }

    window.addEventListener("scroll", () => {
      if (!animationFrameId) {
        // 开始平滑滚动
        smoothScroll();
      }
    });
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
