/*
 * @Author: 阿喜
 * @Date: 2023-08-19 21:30:45
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 17:16:33
 * @FilePath: \monster-resume\src\component\Testmonial\Index.tsx
 * @Description:
 *
 */
import { StarOutlined } from "@ant-design/icons";
export default function Index() {
  return (
    <div className="testmonial__container">
      <div className="content">
        <h1>技能介绍</h1>
      </div>
      <div className="content__item">
        <div className="item" style={{ width: "20%" }}>
          <div style={{ display: "flex" }}>
            <StarOutlined style={{ color: "gray" }} />
            <StarOutlined style={{ color: "gray" }} />
            <StarOutlined style={{ color: "gray" }} />
          </div>
          <div>
            <p style={{ color: "black" }}>
              熟悉Webpack、Vite、Rollup等构建打包工具，并曾使用Jest、Vitest等前端单元测试框架。同时，我也曾利用Vuepress等文档工具编写开发文档。
            </p>
            <p style={{ color: "black" }}>
              性能优化：对前端性能优化有一定的经验，熟悉利用浏览器开发者工具进行性能分析，并尝试过减少HTTP请求、图片懒加载、虚拟列表.
              代码分割等技术来提升页面加载速度.
            </p>
            <p style={{ color: "black" }}>
              熟悉Nextjs框架. 对SSR框架有一些开发和使用的经验.
            </p>
          </div>
        </div>
        <div className="item" style={{ width: "20%" }}>
          <div style={{ display: "flex" }}>
            <StarOutlined style={{ color: "gray" }} />
            <StarOutlined style={{ color: "gray" }} />
          </div>
          <div>
            <p style={{ color: "black" }}>
              熟悉canvas有一定的了解，并熟悉farbicjs.
              了解图层绘制和渲染原理，实现图形编辑、图层管理和事件处理等功能。
            </p>
            <p style={{ color: "black" }}>
              熟悉实时通讯技术如WebSocket和WebRTC，并在一些平台如web端、PC端及微信生态中有相关经验。
            </p>
            <p style={{ color: "black" }}>
              熟悉HTTP/HTTPS协议，知晓浏览器跨域处理方案、浏览器缓存等内容。并在Node.js(express)环境下有所开发，尝试为项目开发一些中间件。例如静态文件中间件等.{" "}
            </p>
          </div>
        </div>
        <div className="item" style={{ width: "20%" }}>
          <div style={{ display: "flex" }}>
            <StarOutlined style={{ color: "gray" }} />
            <StarOutlined style={{ color: "gray" }} />
          </div>
          <div>
            <p style={{ color: "black" }}>
              开源与社区：参与过开源项目(leaferjs)
              贡献过canvas插件，积极在GitHub等社区分享和学习。并时常浏览Stack
              Overflow、掘金等技术社区，解决开发中遇到的问题。闲暇时参照vue3核心源码简易实现了reactive.ref.effect等hook开源至github
              并收获100多star
            </p>
            <p style={{ color: "black" }}>
              对前端图表库如Echart.js、D3js、threejs等熟悉，并曾参与相关图表的开发与维护。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
