export function vector2(x, y) {
    return new Float32Array([x, y]);
}

export function vector2Left() {
    return vector2(1.0, 0.0);
}

export function vector2Right() {
    return vector2(0.0, 1.0);
}

export function vector2Zero() {
    return vector2(0, 0);
}

export function vector2Sub(v1, v2) {
    return vector2(
        v1[0] - v2[0],
        v1[1] - v2[1]
    );
}

export function vector2AreEquals(v1, v2) {
    return v1[0] === v2[0] && v1[1] === v2[1];
}