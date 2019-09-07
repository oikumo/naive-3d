import { drawLine2D } from "./brush.js";

export function drawTexture(
  targetTex,
  targetWidth,
  targetHeight,
  quad,
  tex,
  texWidth,
  texHeigth
) {
  const red = 0xff0000ff;

  let col = 0;
  let row = 0;
  let color;
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let index = 0;
  let texX = 0;
  let texY = 0;
  let dx = 0;
  let dy = 0;

  let len = targetWidth * targetHeight;

  for (index = len - 1; index >= 0; --index) {
    tx = x / targetWidth;
    ty = y / targetHeight;

    tx += (0.001 * index) / 1000;
    ty += (0.001 * index) / 1000;

    //dx = Math.floor((quad.b.x + x * (quad.c.x - quad.b.x)) / targetWidth);
    //dy = Math.floor((quad.b.y + y * (quad.c.y - quad.b.y)) / targetHeight);

    texX = Math.floor(tx * texWidth);
    texY = Math.floor(ty * texHeigth);

    texX = texX > texWidth ? texWidth - texX : texX;
    texY = texY > texHeigth ? texHeigth - texY : texY;

    color = tex.pixels[texX + texY * texHeigth];

    targetTex[x + y * targetWidth] = color;

    if (x < targetWidth) {
      x++;
    } else {
      x = 0;
      y++;
    }
  }
}
