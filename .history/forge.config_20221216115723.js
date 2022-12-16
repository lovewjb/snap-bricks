module.exports = {
  packagerConfig: {
    name: 'xxx客户端',
    executableName: 'App',
    extraResource: ['./assets/Readme.txt', './assets/img/a.png'], // 静态文件
    icon: './build/icon'

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
