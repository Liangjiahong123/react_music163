const path = require('path');

const pathResolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@cpns': pathResolve('src/components'),
      '@img': pathResolve('src/assets/img')
    }
  }
};
