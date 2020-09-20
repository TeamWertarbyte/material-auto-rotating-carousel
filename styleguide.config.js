const path = require('path')

module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/**/[A-Z]*.js',
  webpackConfig: {
    resolve: {
      alias: {
        'rsg-components/Wrapper': path.join(__dirname, 'styleguide', 'Wrapper')
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  getComponentPathLine: (componentPath) => {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from 'material-auto-rotating-carousel';`
  }
}
