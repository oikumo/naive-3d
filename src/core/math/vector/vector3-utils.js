import { vector3 } from "./vector3.js";

export function vector3Translate(v, delta) {
    v[0] += delta[0];
    v[1] += delta[1];
    v[2] += delta[2];
}

export function vector3lerp(v, target, t = 1) {
    v[0] += t * (target[0] - v[0]);
    v[1] += t * (target[1] - v[1]);
    v[2] += t * (target[2] - v[2]);
}

export function vector3Scale(v, factor) {
    v[0] *= factor;
    v[1] *= factor;
    v[2] *= factor;
}

export function vector3Sub(v2, v1) {
    return vector3(
        v2[0] - v1[0],
        v2[1] - v1[1],
        v2[2] - v1[2]
    );
}

export function vector3Distance(v1, v2) {
    const diff = vector3Sub(v1, v2);
    return Math.sqrt(Math.pow(diff[0], 2) + Math.pow(diff[1], 2) + Math.pow(diff[2], 2));
}
