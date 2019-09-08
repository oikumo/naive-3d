import { drawLine2D } from "./brush.js";

export function drawTexture(
  // Texture
  targetTex,
  targetWidth,
  targetHeight,
  //
  quad,
  // Image
  image,
  imageWidth,
  imageHeigth
) {
  const red = 0xff0000ff;
  const green = 0xff00ff00;

  let len = targetWidth * targetHeight;
  let x = 0;
  let y = 0;

  const l1 = createLine(
    Math.ceil(quad.a.x),
    Math.ceil(quad.a.y),
    quad.c.x,
    quad.c.y,
    targetWidth
  );

  const l2 = createLine(
    Math.ceil(quad.a.x),
    Math.ceil(quad.a.y),
    quad.b.x,
    quad.b.y,
    targetWidth
  );

  const l3 = createLine(
    Math.ceil(quad.b.x),
    Math.ceil(quad.b.y),
    quad.d.x,
    quad.d.y,
    targetWidth
  );

  const l4 = createLine(
    Math.ceil(quad.c.x),
    Math.ceil(quad.c.y),
    quad.d.x,
    quad.d.y,
    targetWidth
  );

  // TODO vector projection into lines to determines uv coordinates

  let inside1 = false;

  for (let i = 0; i < len; i++) {
    if (!inside1 && l1.has(x + y * targetHeight)) {
      inside1 = true;
    }

    if (
      inside1 &&
      (l2.has(x + y * targetHeight) ||
        l3.has(x + y * targetHeight) ||
        l4.has(x + y * targetHeight))
    ) {
      inside1 = false;
    }

    if (inside1) {
      targetTex[x + y * targetWidth] = red;
    }

    if (x < targetWidth) {
      x++;
    } else {
      x = 0;
      y++;
      inside1 = false;
      inside2 = false;
    }
  }
}

function createLine(ax, ay, bx, by, width) {
  const line = new Set();
  const dx = bx - ax;
  const dy = by - ay;
  const n = Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
  let i,
    x,
    t,
    y = 0;
  for (i = n - 1; i >= 0; --i) {
    t = i / n;
    x = Math.floor(ax + t * dx);
    if (x < 0 || x >= width) continue;

    y = ay + Math.floor(t * dy);
    line.add(Math.floor(y * width) + x);
  }

  return line;
}
