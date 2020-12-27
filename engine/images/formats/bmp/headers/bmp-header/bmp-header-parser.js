import { DataReader } from '../../utils/data-reader.js'

const BmpHeader = function (id, fileSize, unused0, unused1, pixelsDataOffset) {
    this.id = id
    this.fileSize = fileSize
    this.unused0 = unused0
    this.unused1 = unused1
    this.pixelsDataOffset = pixelsDataOffset
}

const parseBmpHeader = function (data) {
    const reader = new DataReader(data)
    const id = reader.nextString(2)
    const fileSize = reader.nextReversedNumber(4)
    const unused0 = reader.nextReversedNumber(2)
    const unused1 = reader.nextReversedNumber(2)
    const pixelsDataOffset = reader.nextReversedNumber(4)
    return new BmpHeader(
        id,
        fileSize,
        unused0,
        unused1,
        pixelsDataOffset
    )
}

export {
    parseBmpHeader
}