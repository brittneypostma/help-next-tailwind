module.exports = 
{

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