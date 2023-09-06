/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:49:57
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-19 22:02:22
 * @FilePath: \monster-resume\postcss.config.js
 * @Description:
 *
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions"], // 指定目标浏览器版本
      grid: true, // 是否启用自动添加 Grid 布局前缀
    },
  },
};
