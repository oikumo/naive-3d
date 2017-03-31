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
    renderOnScreen(createRaster(createData(), width, height));
}

function onMouseDown () {
    centerTriangleTo(addTriangleToGeometry(geometry), cursorU, cursorV); // Add triangle
}

function createData () {
    var data = createTexture(width, height, " ");
    drawLine2D('A', 0, 0, cursorU, cursorV, data, width);
    drawLine2D('B', width - 1, height - 1, cursorU, cursorV, data, width);
    drawLine2D('C', 0, height - 1, cursorU, cursorV, data, width);
    drawLine2D('D', width - 1, 0, cursorU, cursorV, data, width);

    angle = triangleRotationSpeed * deltaTime;
    var geometries = geometry.shapes;
    var i;
    for (i = geometries.length - 1; i >= 0; --i) {
        rotateTriangle(geometries[i], angle);
        drawTriangle2D(geometries[i], data, width);
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
    var i;
    for (i = n; i >= 0; --i) {
        data[i] = pickRandomElement(colors);
    }
    return data;
}

function createRaster (data, width, height) {
    var raster = '', i, j = 0;
    var len = width * height;
    for (i = 0; i < len; i++) {
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