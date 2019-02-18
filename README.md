# 功能
    fontmin, node.js 脚本
# 使用方法
    ```
     git clone 到本地
     cd fontmin
     npm install
     修改 src/conf.js 文件（里面配置需要转换的字体文件存放路劲 和 需要转换的文字）
     node app.js
     命令行 就会出现提示, 包括是否成， 被转换的文本，转换之后的字体样式 和 结果文件存放位置，如
    ```

    ```
    完成!
    文本是：明日可领取 祝你福气满满 财源滚滚
    字体样式=src/font/FZQKBYSJ.TTF
    结果文件=asset/font/1550468540633
    ```
# 文件存放
    ```
    app.js
    src
        conf.js // 配置文件
        font //文件夹， 用于存放字体文件
    asset
        font //文件夹， 用于存放生成结果文件
            [时间戳文件夹名称]
                 conf.txt
                 .css
                 .eot
                 .svg
                 .ttf
    ```
