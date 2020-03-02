const { send, load, resize, optimizeForWeb, blur } = require("../utils");

module.exports = async (req, res) => {
  const { src, w, h, q, b } = req.query;

  const img = await load(src);

  if (w || h)
    await resize(img, w, h);

  if (b)
    await blur(img, b);

  await optimizeForWeb(img, q);

  send(res, img);
};
