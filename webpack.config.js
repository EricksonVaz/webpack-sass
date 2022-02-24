const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool:"inline-source-map",
    entry:"./src/style.scss",
    output:{
        path:path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {
                test:/\.(scss|sass|css)$/,
                exclude:/node_modules/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:"style.css"})
    ]
}