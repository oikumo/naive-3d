import { draw } from "./drawer.js";
import { TriangleBuffer } from "./rendering/geometry/triangleBuffer.js";
import { Quad } from "./rendering/geometry/quad.js";
import { Cube } from "./rendering/geometry/cube.js";
import { CubeBuffer } from "./rendering/geometry/cubesBuffer.js";
import { TextureFactory } from "./rendering/textures/textureFactory.js";
import { Pallete } from "./rendering/colors/pallete.js";
import { Renderer } from "./rendering/renderer.js";
import { Sprite } from "./rendering/geometry/sprite.js";

export class Core {
  constructor() {
    this.renderer = new Renderer();
    this.angle = 0.0;
    this.sprites = [];
    this.triangles = new TriangleBuffer();
    this.cubes = new CubeBuffer();
    this.createCube();
  }
  draw(width, height, deltaTime) {
    this.renderer.clear();
    draw(
      this.renderer.texture,
      width,
      height,
      this.triangles,
      this.cubes,
      this.sprites,
      this.angle,
      this.cube,
      this.cubeTexture,
      this.quad
    );
    this.renderer.draw();
    this.cube.transform(0.025);
    this.angle = this.angle + 0.001 * deltaTime;
  }
  createCube() {
    const pallete = new Pallete();
    this.cube = new Cube({ x: 400, y: 400, z: 400 }, 100);
    this.cubeTexture = new TextureFactory(256, 256).checker(
      pallete.color[1],
      pallete.color[0],
      10,
      10
    );
  }
  createQuad() {
    const pallete = new Pallete();
    const tex = new TextureFactory(100, 100).checker(
      pallete.color[1],
      pallete.color[0],
      10,
      10
    );
    this.quad = new Quad({ x: 50, y: 50 }, 100, tex);
  }
  addTriangle(x, y) {
    this.triangles.add(x, y, 0xff00ffff);
  }
  addCube() {
    this.cubes.add();
  }
  addSprite(x, y) {
    const pallete = new Pallete();
    const texture = new TextureFactory(200, 200).checker(
      pallete.color[0],
      pallete.color[4],
      10,
      10
    );
    this.sprites.push(new Sprite({ x: x, y: y }, texture));
  }
}
