var p1, p2, p3, center;
p1 = { x:20, y: 20 };
p2 = { x:70, y: 20 };
p3 = { x:45, y: 70 };

var center = { x:45, y:45 };

var angle = 0.0;
var triangle = { a:p1, b:p2, c:p3 };

function centerToCursor() {
    var delta = { x:0, y:0 };
    delta.x = cursorU - center.x;
    delta.y = cursorV - center.y;

    center.x = cursorU;
    center.y = cursorV;

    triangle = translateTriangle(triangle, delta);
}

function startLoop (intervalMilliSeconds) { 
    document.getElementById("screen").onmousedown = centerToCursor;
    setInterval(draw, intervalMilliSeconds);
}

var lastRenderTime = 0.0;
var deltaTime = 0.01;

function draw () {
    var now = Date.now();
    deltaTime = now - lastRenderTime;
    lastRenderTime = now;

    var raster = createRaster(createData(), width, height);
    
    drawCursor(raster);
    renderOnScreen(raster);
}

function createData () {
    //var data = createNoiseTexture(width, height, ['*', '-', '+']);
    var data = createTexture(width, height, " ");

    drawLine2D('A', 0, 0, cursorU, cursorV, data, width);
    drawLine2D('B', width - 1, height - 1, cursorU, cursorV, data, width);
    drawLine2D('C', 0, height - 1, cursorU, cursorV, data, width);
    drawLine2D('D', width - 1, 0, cursorU, cursorV, data, width);

    angle = 0.001 * deltaTime;
    
    rotateTriangle(center, triangle, angle);
    drawTriangle2D(triangle, "P", data, width);

    return data;
}

function rotateTriangle(center, triangle, angle) {

    triangle.a = rotate2D(center, triangle.a, angle);
    triangle.b = rotate2D(center, triangle.b, angle);
    triangle.c = rotate2D(center, triangle.c, angle);
    
    return triangle;
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

function drawTriangle2D (triangle, color, data, dataLineWidth) {
    var p1, p2, p3;
    p1 = triangle.a;
    p2 = triangle.b;
    p3 = triangle.c;

    drawLine2D("1", p1.x, p1.y, p2.x, p2.y, data, dataLineWidth);
    drawLine2D("2", p2.x, p2.y, p3.x, p3.y, data, dataLineWidth);
    drawLine2D("3", p3.x, p3.y, p1.x, p1.y, data, dataLineWidth);
}

function renderOnScreen(raster) {
    document.getElementById("screen").innerHTML = raster;
}

function createTexture (width, height, colors) {
    return new Array(width * height).fill(colors);
}

function createNoiseTexture (width, height, colors) {
    var n = width * height;
    var data = new Array(n);
    for (var i = n; i >= 0; --i) {
        data[i] = pickRandomElement(colors);
    }
    return data;
}

function createRaster (data, width, height) {
    var raster = '', j = 0;
    for (var i = 0, len = width * height; i < len; i++) {
        raster += data[i];
        if (j + 1 == width) {
            raster += "</br>";
            j = 0;
        } else {
            j++;
        }
    }
    return raster;
}

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

function drawCursor(raster) {
    if (cursorU < width) {
        raster = setCharAt(raster, (cursorV * (5 + width)) + cursorU, '#');
    }
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}
