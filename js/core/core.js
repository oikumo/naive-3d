import { draw } from "./drawer.js";
import { TriangleBuffer } from "./geometry/triangleBuffer.js";
import { Quad } from "./geometry/quad.js";
import { Cube } from "./geometry/cube.js";
import { CubeBuffer } from "./geometry/cubesBuffer.js";
import { TextureFactory } from "../textures/textureFactory.js";
import { Pallete } from "../colors/pallete.js";
import { Renderer } from "./renderer.js";
import { Sprite } from "./geometry/sprite.js";

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
    this.cube.transform();
    this.angle = this.angle + 0.001 * deltaTime;
  }
  createCube() {
    const pallete = new Pallete();
    this.cube = new Cube({ x: 350, y: 350, z: 350 }, 100);
    this.cubeTexture = new TextureFactory(1000, 1000).checker(
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
