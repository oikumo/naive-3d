function randomInt(_min, _max) {
  var min = Math.ceil(_min);
  var max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function clamp(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

function pickRandomElement (arr) {
    return arr[Math.floor(Math.random () * arr.length)];
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}