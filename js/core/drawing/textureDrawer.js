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

  let tlines = 0.0
  let pixels = image.pixels
  let i, x, t, y = 0
  let p1
  let p2
  let deltaQ1P1
  let deltaQ2P2
  let n
  let imagePivot

  while (tlines <= 1.0) {    
    p1 = Math.ceil(quad.a.x + (quad.c.x - quad.a.x) * tlines) // x1
    p2 = Math.ceil(quad.a.y + (quad.c.y - quad.a.y) * tlines) // y1
    deltaQ1P1 = Math.ceil(quad.b.x + (quad.d.x - quad.b.x) * tlines) - p1 // x2
    deltaQ2P2 = Math.ceil(quad.b.y + (quad.d.y - quad.b.y) * tlines) - p2 // y2
    n = Math.floor(Math.sqrt(Math.pow(deltaQ1P1, 2) + Math.pow(deltaQ2P2, 2)))

    for (i = n - 1; i >= 0; --i) {
      t = i / n
      x = Math.floor(p1 + (t * deltaQ1P1))
      if (x < 0 || x >= targetWidth)
        continue

      y = p2 + Math.floor(t * deltaQ2P2)
      imagePivot = Math.floor(tlines * imageHeigth) * imageHeigth
      targetTex[Math.floor(y * targetWidth) + x] = pixels[imagePivot + Math.floor(imageHeigth * t)]
    }
    tlines += 0.0005
  }
}