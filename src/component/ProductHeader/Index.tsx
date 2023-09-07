/*
 * @Author: 阿喜
 * @Date: 2023-08-19 02:50:47
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 16:08:19
 * @FilePath: \monster-resume\src\component\ProductHeader\Index.tsx
 * @Description:
 *
 */
import { Button, Descriptions, DescriptionsProps, Image, Timeline } from "antd";
import React from "react";
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
      <Image
        style={{ objectFit: "cover", borderRadius: "10px" }}
        src={imageUrl.src}
        preview={false}
        width={"80%"}
        height={320}
      ></Image>
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
