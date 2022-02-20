import sharp from 'sharp';

export default async (req, res) => {
  const { src, w, h, q, b, fit } = req.query;

  if (fit &&
    fit !== sharp.fit.contain &&
    fit !== sharp.fit.cover &&
    fit !== sharp.fit.fill &&
    fit !== sharp.fit.inside &&
    fit !== sharp.fit.outside
  ) {
    throw Error(`Invalid 'fit' parameter: ${fit}`)
  }

  const transformations = [
    ['resize', w || h ? { width: +w || undefined, height: +h || undefined, fit } : null],
    ['blur', +b],
    ['jpeg', q ? { quality: +q } : null]
  ];

  let srcImgBuffer = Buffer.from(
    await fetch(src).then((res) => res.arrayBuffer())
  );

  const img = await transformations.reduce(async (acc, [key, param]) => {
    const img = await acc;
    return param ? img[key](param) : img;
  }, sharp(srcImgBuffer));

  res.end(await img.toBuffer());
};
