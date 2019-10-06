import { drawTrianglesBuffer } from "./rendering/drawing/triangles.js";
import { drawCubes, translate, rotateY, rotateX } from "./rendering/drawing/cubes.js";
import { cubeTexturedDrawer } from "./rendering/drawing/cubeTexturedDrawer.js";
import { drawTexture } from "./rendering/drawing/textureDrawer.js";

export function draw(
  texture,
  texWidth,
  texHeight,
  triangles,
  cubes,
  sprites,
  angle,
  cube,
  cubeTexture,
  quad
) {
  for (let i = sprites.length - 1; i >= 0; --i)
    sprites[i].draw(texture, texWidth, texHeight);

  drawTrianglesBuffer(texture, texWidth, triangles, angle);
  translate(cubes.buffer, cubes.elementsCount, 5, 1, 1);
  rotateX(cubes.buffer, cubes.elementsCount);
  rotateY(cubes.buffer, cubes.elementsCount);
  drawCubes(texture, texWidth, texHeight, cubes.buffer, cubes.elementsCount);

  quad.a.x = cube.vectors[1].x;
  quad.a.y = cube.vectors[1].y;
  quad.b.x = cube.vectors[0].x;
  quad.b.y = cube.vectors[0].y;
  quad.c.x = cube.vectors[2].x;
  quad.c.y = cube.vectors[2].y;
  quad.d.x = cube.vectors[3].x;
  quad.d.y = cube.vectors[3].y;

  drawTexture(
    texture,
    texWidth,
    texHeight,
    quad,
    cubeTexture,
    cubeTexture.width,
    cubeTexture.height
  );

  if (cube !== undefined) {
    cubeTexturedDrawer(
      cube.vectors,
      texture,
      texWidth,
      texHeight,
      cubeTexture,
      1000,
      1000
    );
  }
}
