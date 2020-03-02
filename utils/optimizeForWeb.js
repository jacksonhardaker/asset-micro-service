module.exports = async (img, quality = 60) => {
  return img.quality(+quality);
};
