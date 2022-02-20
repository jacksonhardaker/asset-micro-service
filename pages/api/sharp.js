import sharp from 'sharp';

export default async (req, res) => {
  const { src, w, h, q, b, f, p } = req.query;

  if (f && sharp.fit[f] === undefined)
    throw Error(`Invalid 'fit' parameter: ${f}`);

  if (p && sharp.gravity[p] === undefined)
    throw Error(`Invalid 'gravity' parameter: ${p}`);

  const transformations = [
    ['resize', w || h ? { width: +w || undefined, height: +h || undefined, fit: sharp.fit[f], position: sharp.gravity[p] } : null],
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

  res.writeHead(200, {
    'Cache-Control': 'public, max-age=31536000',
  });
  res.end(await img.toBuffer());
};
