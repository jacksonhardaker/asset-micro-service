const Jimp = require("jimp");

module.exports = async (img, w, h) => {
  return img.resize(w ? +w : Jimp.AUTO, h ? +h : Jimp.AUTO);
};
