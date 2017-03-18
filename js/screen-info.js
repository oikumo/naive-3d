function screenInfoMouseEvent (event) {
     var message = "";
     message += ' mouse: (' + event.x + ', ' + event.y + ')';
     message += ' screen: (' + event.screenX + ', ' + event.screenY + ')';
     message += ' cursor: (' + cursorU + ', ' + cursorV + ')';
     return message;
}

function screenInfoDOMElement (element) {
    var message = ' element-> offsetTop:' + element.offsetTop;
    message += ' offsetLeft:' + element.offsetLeft;
    message += ' offsetParent.offsetTop:' + element.offsetParent.offsetTop;
    message += ' offsetWidth' + element.offsetWidth;
    message += ' offsetHeight:' + element.offsetHeight;
    return message;
}