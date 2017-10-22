const {createConfig} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const path = require('path')

const webpackConfig = createConfig([
  babel()
])

webpackConfig.resolve.alias = {}
webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'styleguide', 'Wrapper')

module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/**/[A-Z]*.js',
  webpackConfig,
  getComponentPathLine: (componentPath) => {
    const name = path.basename(componentPath, '.js')
    return `import { ${name} } from 'material-auto-rotating-carousel';`
  }
}
