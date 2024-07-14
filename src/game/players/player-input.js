import { vector3Zero } from "../../core/math/vector/vector3.js";

export class PlayerInput {
    constructor() {
        this.player = null;
        this.position =  vector3Zero();
    }

    setPlayer(player) {
        this.player = player;
    }

    onMove(x, y) {
        if (!this.player) return;
        vector3SetXY(this.position, x, y);
        this.player.moveTo(this.position);
    }

    onActionDown(x, y) {
        console.log("down", x, y);
    }

    onActionUp(x, y) {
        console.log("up", x, y);
    }
}