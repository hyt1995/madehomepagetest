const withImages = require('next-images')
const withVideos = require('next-videos')


module.exports = 
withImages({
  webpack(config, options) {
    return config
  }
})



// module.exports = {
//   exportTrailingSlash: true,
//   exportPathMap: function() {
//     return {
//       '/': { page: '/' }
//     };
//   }
// };






