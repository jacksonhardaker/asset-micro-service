const path = require('path');
const Jimp = require('jimp');

module.exports = async src => {
  try {
    const isRemote = new RegExp(/http(s?):\/\/.*/).test(src);
    const filePath = isRemote ? src : path.join(__dirname, '..', 'assets', src);
    return await Jimp.read(filePath);
  }
  catch (error) {
    console.error(error);
    return null;
  }
};
