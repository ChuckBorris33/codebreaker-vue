module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['src/styles/variables.scss']
    }
  },
  assetsDir: 'static',
  pwa: {
    name: 'CodeBreaker',
    themeColor: '#122932',
    msTileColor: '#122932',
    manifestPath: 'favicons/manifest.json',
    assetsVersion: '1',
    iconPaths: {
      favicon96: 'favicons/favicon-96x96.png',
      favicon32: 'favicons/favicon-32x32.png',
      favicon16: 'favicons/favicon-16x16.png',
      appleTouchIcon: 'favicons/apple-icon.png',
      maskIcon: 'logo.png',
      msTileImage: 'favicons/ms-icon-144x144.png'
    }
  }
}
