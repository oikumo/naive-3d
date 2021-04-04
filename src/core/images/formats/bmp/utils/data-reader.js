import { unreversebytes } from './bytes-utils.js'

const DataReader = function (data) {
    this.data = data
    this.cursor = 0
}

DataReader.prototype.slice = function (bytes) {
    const dataSlice = this.data.slice(this.cursor, this.cursor + bytes)
    this.cursor += bytes
    return dataSlice
}

DataReader.prototype.seekFromCursor = function (offset) {
    this.cursor += offset
}

DataReader.prototype.nextString = function (bytes) {
    return String.fromCharCode.apply(null, this.slice(bytes))
}

DataReader.prototype.nextReversedNumber = function (bytes) {
    return unreversebytes(this.slice(bytes))
}

export {
    DataReader
}