export default config => ({
  ...config,
  publicPath: process.env.ASSET_URL || "/assets/",
  ports: {
    client: 8000,
    server: process.env.PORT || 8080,
  },
});
