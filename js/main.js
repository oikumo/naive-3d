function startLoop (intervalMilliSeconds) {    
    setInterval(draw, intervalMilliSeconds);
}

function draw () {
    var raster = createRaster(createData(), width, height);
    drawCursor(raster);
    renderOnScreen(raster);
}

function createData () {
    var data = createNoiseTexture(width, height, ['*', '-', '+']);
    drawLine2D('X', 1, 1, cursorU, cursorV, data, width);
    drawLine2D('#', width, height, cursorU, cursorV, data, width);
    return data;
}

function renderOnScreen(raster) {
    document.getElementById("screen").innerHTML = raster;
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

function drawLine2D (color, p1, p2, q1, q2, data, width) {
    var x=0, y=0;
    var t = 0.0;
    n = Math.floor(Math.sqrt(Math.pow(q1 - p1, 2) + Math.pow(q2 - p2, 2)));
    
    for (var i = 0; i < n; i++) {
        t = i / n;
        x = Math.ceil(p1 + (t * (q1 - p1)));
        y = Math.ceil(p2 + (t * (q2 - p2)));        
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
