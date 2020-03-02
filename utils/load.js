const path = require('path');
const Jimp = require('jimp');

module.exports = async src => {
  try {
    return await Jimp.read(path.join(__dirname, '..', 'assets', src));
  }
  catch (error) {
    console.error(error);
    return null;
  }
};
