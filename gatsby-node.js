const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        images: path.resolve(__dirname, 'src/images'),
        style: path.resolve(__dirname, 'src/style'),
      },
    },
  });
};
