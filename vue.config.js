const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true
    // devServer:{
    //   proxy:{
    //     '/':{
    //       ws: false,
    //       target:"http://api.yuleng.top:38090",
    //       changeOrigin:true
    //     }
    //   }
    // }
});
