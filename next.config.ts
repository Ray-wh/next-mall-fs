import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // 开启相关实验性特性，可能与组件标记等功能相关
    devtoolSegmentExplorer: true,
  },
};

export default nextConfig;
