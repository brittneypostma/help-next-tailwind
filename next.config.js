module.exports = 
{
  webpack: (configuration, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => 
  {

    configuration.module.rules.push(
      {
          test: /\.md$/,
          use: 
          [
              {
                  loader: 'frontmatter-markdown-loader',
                  // options: { mode: ['react-component'] }
              }
          ]
      }
    );

    return configuration;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/project',
        destination: '/projects',
        permanent: true
      }
    ]
  },

  distDir: "./build"
}