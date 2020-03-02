module.exports = async (res, img) => {
  const mime = img._originalMime;
  const buffer = await img.getBufferAsync(mime);

  res.writeHead(200, {
    'Cache-Control': 'public, max-age=31536000',
    'Content-Type': mime,
    'Content-Length': buffer.length
  });
  res.end(buffer);
};;
