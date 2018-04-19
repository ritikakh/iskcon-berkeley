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
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
