/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // styled-components SSR로인해 className이 unmatch되는 문제를 SWC로 해결하기 위해서 추가.
    styledComponents: true,
  },
};

module.exports = nextConfig;
