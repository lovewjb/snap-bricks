module.exports = {
  packagerConfig: {
    name: 'xxx客户端',
    executableName: 'App',
    extraResource: ['./assets/Readme.txt', './assets/img/a.png'], // 静态文件
    icon: './build/icon'
————————————————
版权声明：本文为CSDN博主「wanzheng_96」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/wanzheng_96/article/details/118223970
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
