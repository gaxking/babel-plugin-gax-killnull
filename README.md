# babel-plugin-gax-killnull
自己写的一个babel插件，用来判断null变量避免报错

## usage
npm install babel-plugin-gax-killnull --save-dev  

加入gax-killnull插件, 在你的.babelrc，like this  
{ "presets": ["es2015","stage-0"],
  "plugins": [
    "gax-killnull"
  ]
}
