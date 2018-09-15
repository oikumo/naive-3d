function translateTriangle(triangle, center) {
    translate2D(triangle.a, center);
    translate2D(triangle.b, center);
    translate2D(triangle.c, center);
}

function translate2D(point, delta) {
    point.x += delta.x;
    point.y += delta.y;
}

function rotate2D(center, point, angle) {
    var p = {
        x: point.x - center.x, 
        y: point.y - center.y
    };
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    point.x = (cos * p.x) - (sin * p.y) + center.x;
    point.y = (sin * p.x) + (cos * p.y) + center.y; 
}

function rotateTriangle(triangle, angle) {
    rotate2D(triangle.center, triangle.a, angle);
    rotate2D(triangle.center, triangle.b, angle);
    rotate2D(triangle.center, triangle.c, angle);
}