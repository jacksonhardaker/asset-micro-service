const { send, load, resize, optimizeForWeb, blur } = require('../../utils');

module.exports = async (req, res) => {
  const { src, w, h, q, b, cover, contain, raw } = req.query;

  const img = await load(src);

  if (img) {
    if (w || h)
      await resize({ img, w, h, cover, contain });

    if (b)
      await blur(img, b);

    if (!raw)
      await optimizeForWeb(img, q);

    send(res, img);
  }
  else {
    res.status(404).send('Not found.');
  }
};
