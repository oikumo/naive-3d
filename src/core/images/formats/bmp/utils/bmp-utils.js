export function getPixelsBytesPerRow(width, bytesPerPixel) {
    return width * bytesPerPixel;
}

export function getPaddingBytesPerRow(width, bytesPerPixel) {
    const pixelsBytesPerRow = getPixelsBytesPerRow(width, bytesPerPixel);
    const module = pixelsBytesPerRow % 4;
    const paddingBytesPerRow = module === 0 ? 0 : 4 - module;
    return paddingBytesPerRow;
}