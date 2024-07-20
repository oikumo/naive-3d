import { Timer } from '../../core/time/timer.js';
import { Renderer } from '../../core/renderer/renderer.js';
import { Color } from '../../core/colors/color.js';
import { Line2d } from '../../core/geometry/primitives/line/line2d.js';
import { Point2d } from '../../core/geometry/primitives/points/point2d.js';

export class GameManager {
    constructor(renderer, playerInput) {
        this.renderer = renderer;
        this.playerInput = playerInput;
        this.scene = null;
        this.timer = new Timer();
    }

    loadScene(scene) {
        this.timer.start();
        this.scene = scene;
    }

    tick() {
        //this.renderer.clear(Color.black);
        this.timer.step();
        if (this.scene) {
            this.scene.draw(this.renderer, this.timer.deltaSeconds());
        }

        const center = new Point2d(50, 50);
        const lines= [
            new Line2d(new Point2d(1, 0), center),
            new Line2d(new Point2d(10, 50), center),
            new Line2d(new Point2d(20, 100), center),
            new Line2d(new Point2d(30, 150), center)
        ];

        lines.forEach((line) => {
            Line2d.draw(this.renderer, line.a, line.b, Color.black);
        });

        this.renderer.draw();
    }
}