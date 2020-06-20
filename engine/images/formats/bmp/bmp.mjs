const abgr2bgr = (abgrColor) => { 
    let bgrColor = 0
    bgrColor |= ((255) & (abgrColor >> 0))
    bgrColor |= ((255) & (abgrColor >> 8)) << 8
    bgrColor |= ((255) & (abgrColor >> 16)) << 16
    return bgrColor
}

const hex2bin = (hex) => {
    if (!hex) {
        return new Uint8Array();
    }

    var a = [];
    for (var i = 0, len = hex.length; i < len; i += 2) {
        a.push(parseInt(hex.substr(i, 2), 16));
    }

    return new Uint8Array(a);
}

const BMPImage = function () { }

BMPImage.abgr2bgrArray = function (pixels, width, height) { 
    const pixelsLength = width * height
    const padding = width
    const bytesPerPixel = 4
    const dataLength = width * bytesPerPixel * height

    const data = new Uint8Array(dataLength)   
    let dataIndex = 0
    let col = 0

    for (let i = 0; i < pixelsLength; i++) {
        const color3 = abgr2bgr(pixels[i])
        data[dataIndex++] = ((255) & (color3 >> 0))
        data[dataIndex++] = ((255) & (color3 >> 8))
        data[dataIndex++] = ((255) & (color3 >> 16)) 

        if (col + 1 === padding) {
            for (let paddingIndex = 0; paddingIndex < padding; paddingIndex++) {
                data[dataIndex++] = 0
            }
            col = 0
        }
        else { 
            col++
        }
    }

    return data
}

export {
    BMPImage,
    hex2bin,
    abgr2bgr
}