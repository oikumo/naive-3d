var width;
var height;
var cursorU = 0;
var cursorV = 0;
var screen;
var screenInfo;

function init(_width, _height, intervalMilliSeconds) {
    width = _width;
    height = _height;
    screen = document.getElementById("screen");
    screenInfo = document.getElementById("screen-info");
    document.onmousemove = onMouseMove;
    
    startLoop(intervalMilliSeconds);
}

function onMouseMove(event) {    
    var _x = event.x - screen.offsetLeft + window.pageXOffset;
    var _y = event.y - screen.offsetTop + window.pageYOffset;

    cursorU = Math.floor(clamp(_x, 0, screen.offsetWidth) / screen.offsetWidth * width);
    cursorV = Math.floor(clamp(_y, 0, screen.offsetHeight) / screen.offsetHeight * height);

    screenInfo.innerHTML = screenInfoMouseEvent(event);
}