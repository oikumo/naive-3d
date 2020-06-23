import { DataReader } from '../../utils/data-reader.mjs'

const DibHeader = function (dibHeaderBytes, bitMapWidth, bitMapHeight,
    colorPlanes, bytesPerPixel, pyxelCompression, dataBitmapSize,
    pixelPerMetreHorizontal, pixelPerMetreVertical, colorInPallete, colorAreImportant) {
    this.dibHeaderBytes = dibHeaderBytes
    this.bitMapWidth = bitMapWidth
    this.bitMapHeight = bitMapHeight
    this.colorPlanes = colorPlanes
    this.bytesPerPixel = bytesPerPixel
    this.pyxelCompression = pyxelCompression
    this.dataBitmapSize = dataBitmapSize
    this.pixelPerMetreHorizontal = pixelPerMetreHorizontal
    this.pixelPerMetreVertical = pixelPerMetreVertical
    this.colorInPallete = colorInPallete
    this.colorAreImportant = colorAreImportant
}

const parseDibHeader = function (data) {
    const reader = new DataReader(data)
    const dibHeaderBytes = reader.nextReversedNumber(4)
    const bitMapWidth = reader.nextReversedNumber(4)
    const bitMapHeight = reader.nextReversedNumber(4)
    const colorPlanes = reader.nextReversedNumber(2)
    const bytesPerPixel = reader.nextReversedNumber(2)
    const pyxelCompression = reader.nextReversedNumber(4)
    const dataBitmapSize = reader.nextReversedNumber(4)
    const pixelPerMetreHorizontal = reader.nextReversedNumber(4)
    const pixelPerMetreVertical = reader.nextReversedNumber(4)
    const colorInPallete = reader.nextReversedNumber(4)
    const colorAreImportant = reader.nextReversedNumber(4)


    return new DibHeader(
        dibHeaderBytes,
        bitMapWidth,
        bitMapHeight,
        colorPlanes,
        bytesPerPixel,
        pyxelCompression,
        dataBitmapSize,
        pixelPerMetreHorizontal,
        pixelPerMetreVertical,
        colorInPallete,
        colorAreImportant
    )
}

export {
    parseDibHeader
}