var angle = 0.0;
var lastRenderTime = 0.0;
var deltaTime = 0.01;
var triangleRotationSpeed = 0.001;
var geometry = new Geometry();

function startLoop (intervalMilliSeconds) { 
    document.getElementById("screen").onmousedown = onMouseDown;
    setInterval(draw, intervalMilliSeconds);
}

function updateDeltaTime() {
    var now = Date.now();
    deltaTime = now - lastRenderTime;
    lastRenderTime = now;
}

function draw () {
    updateDeltaTime ();    
    var raster = createRaster(createData(), width, height);    
    drawCursor(raster);
    renderOnScreen(raster);
}

function onMouseDown () {
    addTriangle();
}

function addTriangle () {
    var triangle = addTriangleToGeometry(geometry);
    centerTriangleTo(triangle, cursorU, cursorV);
}

function createData () {
    var data = createTexture(width, height, " ");

    drawLine2D('A', 0, 0, cursorU, cursorV, data, width);
    drawLine2D('B', width - 1, height - 1, cursorU, cursorV, data, width);
    drawLine2D('C', 0, height - 1, cursorU, cursorV, data, width);
    drawLine2D('D', width - 1, 0, cursorU, cursorV, data, width);

    angle = triangleRotationSpeed * deltaTime;

    var geometries = geometry.shapes;
    var geo;

    for (var i = geometries.length - 1; i >= 0; --i) {
        geo = geometries[i];
        rotateTriangle(geo.center, geo, angle);
        drawTriangle2D(geo, "P", data, width);
    }
    
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
