function drawLine2D (color, _p1, _p2, _q1, _q2, data, width) {
    var p1 = Math.ceil(_p1);
    var p2 = Math.ceil(_p2);
    var deltaQ1P1 = Math.ceil(_q1) - p1;
    var deltaQ2P2 = Math.ceil(_q2) - p2;
    var n = Math.floor(Math.sqrt(Math.pow(deltaQ1P1, 2) + Math.pow(deltaQ2P2, 2)));
    
    var i, x, t;
    for (i = 0; i < n; i++) {
        t = i / n;
        x = Math.floor(p1 + (t * deltaQ1P1));
        if (x < 0 || x >= width) 
            continue;

        y = p2 + Math.floor(t * deltaQ2P2);
        data[(y * width) + x] = color;
    }
}

function drawTriangle2D (triangle, data, dataLineWidth) {
    var p1 = triangle.a;
    var p2 = triangle.b;
    var p3 = triangle.c;
    var color = triangle.color;

    drawLine2D(color, p1.x, p1.y, p2.x, p2.y, data, dataLineWidth);
    drawLine2D(color, p2.x, p2.y, p3.x, p3.y, data, dataLineWidth);
    drawLine2D(color, p3.x, p3.y, p1.x, p1.y, data, dataLineWidth);
}

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