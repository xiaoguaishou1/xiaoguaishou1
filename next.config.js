/*
 * @Author: 阿喜
 * @Date: 2023-08-19 01:49:57
 * @LastEditors: 阿喜
 * @LastEditTime: 2023-08-19 02:42:17
 * @FilePath: \monster-resume\next.config.js
 * @Description:
 *
 */
/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = {
  reactStrictMode: true,
  ...withLess({}),
};

module.exports = nextConfig;
