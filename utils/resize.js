const Jimp = require("jimp");

const alignment = {
  lt: Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP,
  lm: Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_MIDDLE,
  lb: Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_BOTTOM,
  ct: Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_TOP,
  cm: Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
  cb: Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_BOTTOM,
  rt: Jimp.HORIZONTAL_ALIGN_RIGHT | Jimp.VERTICAL_ALIGN_TOP,
  rm: Jimp.HORIZONTAL_ALIGN_RIGHT | Jimp.VERTICAL_ALIGN_MIDDLE,
  rb: Jimp.HORIZONTAL_ALIGN_RIGHT | Jimp.VERTICAL_ALIGN_BOTTOM,
};

module.exports = async ({ img, w, h, cover, contain }) => {
  if (w && h && cover)
    return img.cover(+w, +h, alignment[cover])

  if (w && h && contain)
    return img.contain(+w, +h, alignment[cover])

  return img.resize(w ? +w : Jimp.AUTO, h ? +h : Jimp.AUTO);
};
