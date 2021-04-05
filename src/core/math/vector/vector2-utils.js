import { vector2, vector2Zero } from "./vector2.js";

export function vector2Translate(v, dx, dy) {
    v[0] += dx;
    v[1] += dy;
}

export function vector2lerp(v, target, t = 1) {
    const result = vector2Zero();
    result[0] = t * (target[0] - v[0]) + v[0];
    result[1] = t * (target[1] - v[1]) + v[1];
    return result;
}

export function vector2Scale(v, factor) {
    v[0] *= factor;
    v[1] *= factor;
}

export function vector2Sub(v1, v2) {
    return vector2(
        v1[0] - v2[0],
        v1[1] - v2[1]
    );
}

export function vector2Distance(v1, v2) {
    const diff = vector2Sub(v1, v2);
    return Math.sqrt(Math.pow(diff[0], 2) + Math.pow(diff[1], 2));
}
