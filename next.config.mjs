// next.config.mjs
export default {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      use: {
        loader: "swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
          },
        },
      },
    });
    return config;
  },
};
