const Fontmin = require('fontmin');
const fs = require("fs");
const conf = require("./src/conf.js");

// const reg = /font=(.+)\ntext=(.+)$/;
// const confText = fs.readFileSync('src/text.txt').toString();
// // const confText = `font=src/font/FZQKBYSJ.TTF
// // text=明日可领取 祝你福气满满 财源滚滚`;
// console.log(confText)
// const conf = confText[0].match(reg);

 console.log('conf= ', conf)
if (!conf) {
    console.error('conf文件格式错误')
} else if (!conf.font) {
    console.error('字体设置不正确')
} else if (!conf.text) {
    console.error('没有设置需要转换的文本')
} else {
    var tamp = Date.now();
    var destPath = 'asset/font/' + tamp;    // 输出路径
    var srcPath = conf.font; // 字体源文件
    var text = conf.text

    var fontmin = new Fontmin()
        .src(srcPath)               // 输入配置
        .use(Fontmin.glyph({        // 字型提取插件
            text: text              // 所需文字
        }))
        .use(Fontmin.ttf2eot())     // eot 转换插件
        .use(Fontmin.ttf2svg())     // svg 转换插件

        .use(Fontmin.css())         // css 生成插件
        .dest(destPath);            // 输出配置

    // 执行
    fontmin.run(function (err, files, stream) {

        if (err) {                  // 异常捕捉
            console.error(err);
        }

        console.log('\033[47;32m' +`完成!\n文本是：${text}\n字体样式=${srcPath}\n结果文件=${destPath}` +'\033[0m');     });

    //创建一份text.txt的备份，留档
        fs.mkdir(destPath, function(err) {
            if (err) {
                return console.error(err)
            }

            fs.writeFile(destPath + '/conf.txt', 'font=' + conf.font + '   \ntext=' + conf.text, function(err) {
                if (err) {
                    return console.error(err)
                }
            })
        })
}
