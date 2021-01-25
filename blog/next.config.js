/*
 * @Description: 
 * @Author: yjr
 * @Date: 2021-01-20 17:24:05
 * @LastEditTime: 2021-01-20 17:24:05
 * @LastEditors: yjr
 */
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => { }
}

module.exports = withCss({})
