const getPixelsBytesPerRow = (width, bytesPerPixel) => width * bytesPerPixel

const getPaddingBytesPerRow = (width, bytesPerPixel) => {
    const pixelsBytesPerRow = getPixelsBytesPerRow(width, bytesPerPixel)
    const module = pixelsBytesPerRow % 4
    const paddingBytesPerRow = module == 0 ? 4 - width : 4 - module
    return paddingBytesPerRow
}

export {
    getPixelsBytesPerRow,
    getPaddingBytesPerRow
}