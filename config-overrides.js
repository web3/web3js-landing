module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      "util": require.resolve("util/"),
  }
  
  return config
}