import sharp from 'sharp';

export default async (req, res) => {
  const { src, w, h, q, b, cover, contain, raw } = req.query;

  const transformations = [
    ['resize', { width: +w || undefined, height: +h || undefined }]
  ];

  let srcImgBuffer = Buffer.from(
    await fetch(src).then((res) => res.arrayBuffer())
  );

  const img = await transformations.reduce(async (acc, [key, param]) => {
    const img = await acc;
    return img[key](param);
  }, sharp(srcImgBuffer));

  res.end(await img.toBuffer());
};
