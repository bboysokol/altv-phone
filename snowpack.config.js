/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    bundle: false,
    minify: false,
    target: 'es2018',
  },
  packageOptions: {},
  devOptions: {
    open: 'none',
  },
  buildOptions: {},
  alias: {
    pages: './src/pages',
    rdx: './src/redux/',
    form: './src/components/Form',
    components: './src/components',
    types: './src/types',
    routes: './src/routes',
    interfaces: './src/interfaces',
    utils: './src/utils',
    hooks: './src/hooks',
  },
};
