/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-webpack',    {
      extendConfig: (config) => {
        config.output.filename = "js/[name].[chunkhash:8].js";
        config.output.chunkFilename = "js/[name].[chunkhash:8].js";
        config.optimization = {
            splitChunks: {
                chunks: "all",
            }
        };

        return config;
      }
    }],
    '@snowpack/plugin-optimize', // note: must be behind plugin-webpack or it breaks
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
