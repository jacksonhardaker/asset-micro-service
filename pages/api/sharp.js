import sharp from 'sharp';

export default async (req, res) => {
  const { src, w, h, q, b, f, g } = req.query;

  if (f && sharp.fit[f] === undefined)
    throw Error(`Invalid 'fit' parameter: ${f}`);

  if (g && sharp.gravity[g] === undefined)
    throw Error(`Invalid 'gravity' parameter: ${g}`);

  const transformations = [
    ['resize', w || h ? { width: +w || undefined, height: +h || undefined, fit: sharp.fit[f], position: sharp.gravity[g] } : null],
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
