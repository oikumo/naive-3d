var angle = 0.0;
var triangle = new Triangle();

triangle.a = {x:20, y:20}
triangle.b = {x:70, y:20}
triangle.c = {x:45, y:70}
triangle.center = {x:45, y:45}

function centerToCursor() {
    var delta = { x:0, y:0 };
    delta.x = cursorU - triangle.center.x;
    delta.y = cursorV - triangle.center.y;

    triangle.center.x = cursorU;
    triangle.center.y = cursorV;

    translateTriangle(triangle, delta);
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
    
    rotateTriangle(triangle.center, triangle, angle);
    drawTriangle2D(triangle, "P", data, width);

    return data;
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

function drawCursor(raster) {
    if (cursorU < width) {
        raster = setCharAt(raster, (cursorV * (5 + width)) + cursorU, '#');
    }
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}
