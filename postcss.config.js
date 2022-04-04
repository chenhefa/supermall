module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 375, //视窗高度, 对应的是我们的设计稿的宽度
      unitPrecision: 5, //指定 "px"转换为视窗单位值的小数位数(很多时候无法整除)
      propList: ['*'],
      viewportUnit: 'vw', //指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
      fontViewportUnit: 'vw',//指定需要转换成的视窗单位, 建议使用vw
      selectorBlackList: ["tab-bar"], //指定不需要转换的类
      minPixelValue: 1, //小于或等于`px`不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换`px`
      replace: true,
      exclude: [/TabBar/], //必须是正则, 匹配文件
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}
// 1.在js中使用正则: /正则相关规则/
// 2.exclude中存放的元素必须是正则表达式
// 3.按照拍出的文件写对应的规则:
// 正则规则:
// 1> ^abc: 表示匹配的内容, 必须以什么内容开头(以abc开头)
// 1> ^abc$: 表示匹配的内容, 必须以什么内容结尾(以abc结尾)
