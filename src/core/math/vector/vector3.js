export function vector3(x, y, z) {
    return new Float32Array([x, y, z]);
}

export function vector3Forward() {
    return vector3(0.0, 0.0, 1.0);
}

export function vector3Left() {
    return vector3(1.0, 0.0, 0.0);
}

export function vector3Right() {
    return vector3(0.0, 1.0, 0.0);
}

export function vector3Zero() {
    return vector3(0, 0, 0);
}

export function vector3SetXY(v, x, y) {
    v[0] = x;
    v[1] = y;
}