const Jimp = require('jimp');
const { alignment } = require('./alignment');

module.exports = async ({ img, w, h, cover, contain }) => {
  if (w && h && cover)
    return img.cover(+w, +h, alignment[cover])

  if (w && h && contain)
    return img.contain(+w, +h, alignment[cover])

  return img.resize(w ? +w : Jimp.AUTO, h ? +h : Jimp.AUTO);
};
