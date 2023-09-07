/*
 * @Author: 阿喜
 * @Date: 2023-08-19 20:15:11
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-09-07 15:30:34
 * @FilePath: \monster-resume\src\component\Features\Index.tsx
 * @Description:
 *
 */

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback, useState } from "react";
import { Button, Image } from "antd";
import imageUrl from "../../aseest/img2.png";
import { Engine } from "tsparticles-engine";

export default function Index() {
  const [item, setItem] = useState<
    {
      title: string;
      content: string;
      url?: string;
    }[]
  >([
    {
      title: "Vuejs",
      content:
        "深入学习Vuejs响应式原理.熟悉Vuejs生态.例如Vuex. Vue-Router等. Vue-CLI等 VueUse等. Vite等. VuePress等.",
      url: "https://github.com/xiaoguaishou1",
    },
    {
      title: "Reactjs",
      content:
        "熟悉antd生态圈,例如umijs ahooks. 熟悉Redux. 熟悉React-router. 熟悉antd-design-pro.",
    },
  ]);

  return (
    <div className="features__container">
      <div className="content">
        <h1>我的技术栈</h1>
        <div>
          <span style={{ color: "black" }}>
            Vuejs. Reactjs. Typescript. uni-app. 微信小程序
          </span>
        </div>
        <div className="content__item">
          {item.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  {item.url && (
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(item.url, "_blank");
                      }}
                    >
                      查看仓库
                    </Button>
                  )}
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
      <Particle></Particle>
    </div>
  );
}

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        // detectRetina: true,
      }}
    />
  );
};
