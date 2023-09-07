/*
 * @Author: panghu 760695955@qq.com
 * @Date: 2023-08-20 00:37:08
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 15:51:43
 * @FilePath: /monster-resume/src/component/Footer/Index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ContainerOutlined } from "@ant-design/icons";
export default function Index() {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <ContainerOutlined style={{ color: "black" }} />
          <span
            style={{ color: "black", fontWeight: "bold", marginLeft: "5px" }}
          >
            我的个人简历 使用Nextjs构建
          </span>
          <p style={{ color: "black" }}>使用figma设计</p>
          <p style={{ color: "black" }}>©2023 monster tompanghu@gmail.com</p>
          <p style={{ color: "black" }}>
            Powered by monster tompanghu@gmail.com
          </p>
        </div>
      </div>
      <div style={{ border: "1px soild black", color: "black" }}></div>
    </div>
  );
}
