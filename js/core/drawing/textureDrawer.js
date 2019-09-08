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
    quad.a.x,
    quad.a.y,
    quad.c.x,
    quad.c.y,
    targetWidth
  );

  const l2 = createLine(
    quad.a.x,
    quad.a.y,
    quad.b.x,
    quad.b.y,
    targetWidth
  );

  const l3 = createLine(
    quad.b.x,
    quad.b.y,
    quad.d.x,
    quad.d.y,
    targetWidth
  );

  const l4 = createLine(
    quad.c.x,
    quad.c.y,
    quad.d.x,
    quad.d.y,
    targetWidth
  );



  // TODO vector projection into lines to determines uv coordinates
  let index = 0;
  let lineStart = null;
  const a = quad.a.x + quad.a.y * targetHeight;
  const b = quad.b.x + quad.b.y * targetHeight;
  const c = quad.c.x + quad.c.y * targetHeight;
  const d = quad.d.x + quad.d.y * targetHeight;

  l1.add(a)
  l2.add(b)
  l3.add(c)
  l4.add(c)

  for (let i = 0; i < len; i++) {
    index = x + y * targetHeight;

    if (lineStart == null) {
      if (l1.has(index)) {
        lineStart = l1;
      } else if (l2.has(index)) {
        lineStart = l2;
      } else if (l3.has(index)) {
        lineStart = l3;
      } else if (l4.has(index)) {
        lineStart = l4;
      } else {
        if (x - 1 < targetWidth) {
          x++;
        } else {
          x = 0;
          y++;
        }
        continue;
      }
    }

    if (index === a || index === b || index === c || index === d) {
      lineStart = null;
    }

    if (lineStart !== null &&
      ((lineStart !== l1 && l1.has(index)) ||
        (lineStart !== l2 && l2.has(index)) ||
        (lineStart !== l3 && l3.has(index)) ||
        (lineStart !== l4 && l4.has(index)))
    ) {
      lineStart = null;
      x = 0;
      y++;
      i += targetWidth - x + 1;
    }

    if (lineStart !== null) {
      targetTex[index] = red;
    }

    if (x - 1 < targetWidth) {
      x++;
    } else {
      x = 0;
      y++;
      lineStart = null;
    }
  }
}

function createLine(ax, ay, bx, by, width) {
  ax = Math.floor(ax)
  ay = Math.floor(ay)
  const line = new Set()
  const dx = bx - ax
  const dy = by - ay
  const n = Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)))
  let i = 0, x = 0, t = 0, y = 0

  for (i = n - 1; i >= 0; --i) {
    t = i / n;
    x = Math.floor(ax + t * dx);
    if (x < 0 || x >= width) continue;

    y = ay + Math.floor(t * dy);
    line.add(Math.floor(y * width) + x);
  }

  return line;
}
