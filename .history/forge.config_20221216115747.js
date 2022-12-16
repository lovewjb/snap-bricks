module.exports = {
  packagerConfig: {
    name: "dazhuankuiaxiaoyouxikehuduan客户端",
    executableName: "App",
    extraResource: ["./assets/Readme.txt", "./assets/img/a.png"],
    icon: "./build/icon",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
