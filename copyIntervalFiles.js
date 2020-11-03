var fs = require("fs");
var config = require('./config')

let sourceDir = config.sourceDir
let intervalNum = config.intervalNum
// 1. 删除copy_images目录
removedir('./copy_files')

//2. 创建copy_images目录
fs.mkdir(__dirname+'/copy_files',function(err){
    if (err) {
        return console.error('创建目录失败，请关闭后重试');
    }
    console.log("目录创建成功。即将读取文件");

    // 3. 读取images目录下所有文件
    fs.readdir(`./${sourceDir}`, function(err, files){
        for (var i=0; i<files.length; i = i+1+intervalNum){
            console.log(files[i])
            fs.copyFile(`./${sourceDir}/${files[i]}`, `${__dirname}/copy_files/${files[i]}`, function(err){
                if (err) {
                    console.log('复制失败')
                }
            })
        } 
        console.log('复制完成，按任意键退出')
    });
});

function removedir(path){
    if (fs.existsSync(path)) {
        let files = fs.readdirSync(path)
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let fielUrl = `${path}/${file}`
            var stats = fs.statSync(fielUrl)
            if (stats.isFile()) {
                // 当前为文件，则删除文件
                fs.unlinkSync(fielUrl)
            }
        }
        // 删除空文件夹
        fs.rmdirSync(path)
    }
}