module.exports = {
  cache: {
    cacheId: "Iskcon Berkeley",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "Iskcon Berkeley",
    logo: "./images/iskconBay.png",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
