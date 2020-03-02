const path = require('path');
const Jimp = require('jimp');

module.exports = async src => {
  return Jimp.read(path.join(__dirname, '..', 'assets', src));
};
