function drawLine2D (color, _p1, _p2, _q1, _q2, data, width) {
    var x, y, t;
    var p1 = Math.ceil(_p1);
    var p2 = Math.ceil(_p2);
    var q1 = Math.ceil(_q1);
    var q2 = Math.ceil(_q2);

    var n = Math.floor(Math.sqrt(Math.pow(q1 - p1, 2) + Math.pow(q2 - p2, 2)));
    
    for (var i = 0; i < n; i++) {
        t = i / n;
        x = Math.floor(p1 + (t * (q1 - p1)));
        if (x < 0 || x >= width) 
            continue;

        y = p2 + Math.floor(t * (q2 - p2));
        data[(y * width) + x] = color;
    }
}

function drawTriangle2D (triangle, color, data, dataLineWidth) {
    var p1, p2, p3;
    p1 = triangle.a;
    p2 = triangle.b;
    p3 = triangle.c;

    drawLine2D("1", p1.x, p1.y, p2.x, p2.y, data, dataLineWidth);
    drawLine2D("2", p2.x, p2.y, p3.x, p3.y, data, dataLineWidth);
    drawLine2D("3", p3.x, p3.y, p1.x, p1.y, data, dataLineWidth);
}

function translateTriangle(triangle, center) {
    triangle.a = translate2D(triangle.a, center);
    triangle.b = translate2D(triangle.b, center);
    triangle.c = translate2D(triangle.c, center);
    return triangle;
}

function translate2D(point, delta) {
    point.x += delta.x;
    point.y += delta.y;
    return point;
}

function rotate2D(center, point, angle) {
    var p = {x:0, y:0};
    p.x = point.x - center.x;
    p.y = point.y - center.y;

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    
    var x = (cos * p.x) - (sin * p.y);
    var y = (sin * p.x) + (cos * p.y);

    point.x = x + center.x;
    point.y = y + center.y; 
    return point;
}

function rotateTriangle(center, triangle, angle) {
    triangle.a = rotate2D(center, triangle.a, angle);
    triangle.b = rotate2D(center, triangle.b, angle);
    triangle.c = rotate2D(center, triangle.c, angle);
}