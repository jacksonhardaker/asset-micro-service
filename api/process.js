const { parse } = require('url');
const { send, load, resize, optimizeForWeb, blur } = require('../utils');

module.exports = async (req, res) => {
  const { pathname } = parse(req.url);
  const { src, w, h, q, b, cover, contain } = req.query;
  const path = src || pathname;

  const img = await load(path);

  if (img) {
    if (w || h)
      await resize({ img, w, h, cover, contain });

    if (b)
      await blur(img, b);

    await optimizeForWeb(img, q);

    send(res, img);
  }
  else {
    res.status(404).send('Not found.');
  }
};
