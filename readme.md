# copyFiles
> node.js 复制文件程序，可设置间隔数，每隔x个文件复制1个
> 需预先安装node.js > 8.5.0

在config.js文件中设置间隔数
```js
var config = {
    intervalNum: 1,      //间隔几个文件拷贝1个文件，默认为隔1个拷1个
    sourceDir: 'images' //原始文件夹名
}
```

保存好config.js文件后双击run.bat即可  
将文件复制到copy_files文件夹