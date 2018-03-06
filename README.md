# babel-plugin-gax-killnull
自己写的一个babel插件，用来判断null变量避免报错

## 描述
利用babel插件在所有数组操作前，加入判断，避免因变量是null 或者 undefined 引起代码错误，例如  
```javascript
     function hello(){
        obj.list ＝ obj.list===null?[] || obj.list;   //编译的时候，babel插件帮我加上这句话
        return obj.list.map(v=>{
        }) ;
    }
```

## usage
npm install babel-plugin-gax-killnull --save-dev  

加入gax-killnull插件, 在你的.babelrc，like this 

```javascript
{ "presets": ["es2015","stage-0"],
  "plugins": [
    "gax-killnull"
  ]
}
```
