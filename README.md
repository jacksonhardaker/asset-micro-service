# Sharpify

A lightweight Next.js app wrapping the [sharp](https://sharp.pixelplumbing.com/) lib to use as an image optimization service.

##

The simple UI provides a convenient way to manipulate the various options and output a preview of the image + the generated URL.

Example: [https://sharpify.vercel.app/?src=https://sharpify.vercel.app/sample.jpg](https://sharpify.vercel.app/?src=https://sharpify.vercel.app/sample.jpg)

## API

Several functions of the `sharp` API have been exposed via the `/api/process` endpoint. In addition to this, the endpoint can be referenced with the following aliases:

`/api/(process|p|sharp|s)` or `/(process|p|sharp|s)`

Example: [https://sharpify.vercel.app/api/process?src=https://sharpify.vercel.app/sample.jpg&w=600](https://sharpify.vercel.app/api/process?src=https://sharpify.vercel.app/sample.jpg&w=600)

The follow query params are supported:

| Shorthand | Attribute | Description                                                                                                                                                                                          |
|-----------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| src       | source    | The absolute path to the image asset. Required.                                                                                                                                                      |
| w         | [width](https://sharp.pixelplumbing.com/api-resize#resize)     | The desired width in pixels. If no height is provided, the image will retain its aspect ratio.                                                                                                       |
| h         | [height](https://sharp.pixelplumbing.com/api-resize#resize)    | The desired height in pixels. If no width is provided, the image will retain its aspect ratio.                                                                                                       |
| q         | [quality](https://sharp.pixelplumbing.com/api-output#jpeg)   | The optimization quality. Integer 1-100.                                                                                                                                                             |
| b         | [blur](https://sharp.pixelplumbing.com/api-operation#blur)      | The desired blur. Number 0.3-1000.                                                                                                                                                                   |
| f         | [fit](https://sharp.pixelplumbing.com/api-resize#resize)       | How the image is cropped when both height and width are provided. Valid options: cover, contain, fill, inside, outside.                                                                              |
| p         | [position](https://sharp.pixelplumbing.com/api-resize#resize)  | The position of the image when cropping. Only necessary when using a fit of cover or contain. Valid options: north, northeast, east, southeast, south, southwest, west, northwest, center or centre. |
