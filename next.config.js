const withImages = require('next-images')
const withVideos = require('next-videos')


module.exports = 
withImages({
  webpack(config, options) {
    return config
  }
}),
withVideos({
  assetDirectory: 'static',
 
  webpack(config, options) {
    return config
  }
})










