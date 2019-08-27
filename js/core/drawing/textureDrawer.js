export function drawTexture(
  targetTex,
  targetWidth,
  targetHeight,
  quad,
  tex,
  texWidth,
  texHeigth
) {
  const fmQ1 = (quad.b.y - quad.a.y) / (quad.b.x - quad.a.x);
  const fnQ1 = quad.b.x - quad.a.x;
  let bx = quad.b.x - quad.a.x;
  let by = quad.b.y - quad.a.y;
  const bAngle = Math.atan2(by, bx);
  const bCos = Math.cos(-bAngle);
  const bSin = Math.sin(-bAngle);
  const scale = 0.5;
  let u = 0;
  let v = 0;
  let r = 0;
  let s = 0;
  let x = 0;
  let y = 0;
  const pixels = tex.pixels;

  for (var i = targetTex.length - 1; i >= 0; --i) {
    if (y > x * fmQ1 + fnQ1) {
      u = x - quad.a.x;
      v = y - quad.a.y;
      r = ((bCos * u - bSin * v) / targetWidth) * texWidth * scale;
      s = ((bSin * u + bCos * v) / targetHeight) * texHeigth * scale;
      r = Math.floor(r);
      s = Math.floor(s);
      targetTex[x + y * targetWidth] = pixels[r + s * texHeigth];
    }
    if (x >= targetWidth) {
      x = 0;
      y++;
    } else {
      x++;
    }
  }
}
