# Sharpify

A lightweight Next.js app wrapping the [sharp](https://sharp.pixelplumbing.com/) lib to use as an image optimization service.

## API

Several functions of the `sharp` API have been exposed via the `/api/process` endpoint. In addition to this, the endpoint can be referenced with the following aliases:

`/api/(process|p|sharp|s)` or `/(process|p|sharp|s)`

Example: [https://sharpify.vercel.app/api/process?src=DSC_2763.jpg&w=600](https://sharpify.vercel.app/api/process?src=https://sharpify.vercel.app/sample.jpg&w=600)

The follow query params are supported:

| Shorthand | Attribute | Description                                                                                                                                                                                          |
|-----------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| src       | source    | The absolute path to the image asset. Required.                                                                                                                                                      |
| w         | width     | The desired width in pixels. If no height is provided, the image will retain its aspect ratio.                                                                                                       |
| h         | height    | The desired height in pixels. If no width is provided, the image will retain its aspect ratio.                                                                                                       |
| q         | quality   | The optimization quality. Integer 1-100.                                                                                                                                                             |
| b         | blur      | The desired blur. Number 0.3-1000.                                                                                                                                                                   |
| f         | fit       | How the image is cropped when both height and width are provided. Valid options: cover, contain, fill, inside, outside.                                                                              |
| p         | position  | The position of the image when cropping. Only necessary when using a fit of cover or contain. Valid options: north, northeast, east, southeast, south, southwest, west, northwest, center or centre. |
