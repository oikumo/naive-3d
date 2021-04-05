export function drawCircleFillOnTexture(pixels, texWidth, centerX, centerY, radiusRaw, color) {
    const radius = Math.floor(radiusRaw);
    const radiusSquare = radius * radius;
    let x = radius;
    let yBottom = 0;
    let yTop = 0;
    let start = 0;
    let end = 0;

    for (let y = 0; y < radius; y++) {

        while ((x * x) + (y * y) > radiusSquare) {
            x--;
        }

        yTop = (centerY - y) * texWidth;
        yBottom = (centerY + y) * texWidth;

        start = centerX - x;
        start = start >= 0 ? start : 0;

        end = centerX + x;
        end = end <= texWidth ? end : texWidth;

        for (let scanX = start; scanX < end; scanX++) {
            pixels[scanX + yTop] = color;
            pixels[scanX + yBottom] = color;
        }
    }
}