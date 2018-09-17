export function translateTriangle(triangle, center) {
    translate2D(triangle.a, center);
    translate2D(triangle.b, center);
    translate2D(triangle.c, center);
}

export function rotateTriangle(triangle, angle) {
    rotate2D(triangle.center, triangle.a, angle)
    rotate2D(triangle.center, triangle.b, angle)
    rotate2D(triangle.center, triangle.c, angle)
}

export function translate2D(point, delta) {
    point.x += delta.x;
    point.y += delta.y;
}

export function rotate2D(center, point, angle) {
    const p = {
        x: point.x - center.x, 
        y: point.y - center.y
    };
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    point.x = (cos * p.x) - (sin * p.y) + center.x;
    point.y = (sin * p.x) + (cos * p.y) + center.y; 
}