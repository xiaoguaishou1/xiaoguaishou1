/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:56:21
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 16:07:58
 * @FilePath: \monster-resume\src\component\NavBar\NavBar.tsx
 * @Description:
 *
 */

import { Button, Space } from "antd";
export default function NavBar() {
  return (
    <div>
      <div className="container">
        <div className="title">个人简历</div>
        <div className="opertion">
          <Space>
            <Button type="primary">中文</Button>
            <Button>English</Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
