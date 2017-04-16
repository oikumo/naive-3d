var angle = 0.0;
var lastRenderTime = 0.0;
var deltaTime = 0.01;
var triangleRotationSpeed = 0.001;
var geometry = new Geometry();

var context2D;
var imageData;
var canvas;

function initCanvas() {
    canvas = document.getElementById("canvas");
    context2D = canvas.getContext("2d");
    imageData = context2D.createImageData(canvas.width, canvas.height);
    context2D.putImageData(imageData, 0, 0);
}

function startLoop (intervalMilliSeconds) { 
    screen.onmousedown = onMouseDown;
    initCanvas();
    setInterval(draw, intervalMilliSeconds);
}

function updateDeltaTime() {
    var now = Date.now();
    deltaTime = now - lastRenderTime;
    lastRenderTime = now;
}

function draw () {
    updateDeltaTime ();     
    var data = createData();
    renderOnScreen(createRaster(data, width, height));
    renderOnCanvas(data);
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
    screen.innerHTML = raster;
}

function renderOnCanvas(data) {
    var i, dataIndex = 0;
    var img = imageData.data;
    var n = img.length;

    for (i=0; i < n; i+=4) {
      img[i] = data[dataIndex++] !== ' ' ? 0 : 255; // r
      img[i+1] = 0; // g
      img[i+2] = 0; // b
      img[i+3] = 255; // a
    }

    context2D.putImageData(imageData, 0, 0);
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