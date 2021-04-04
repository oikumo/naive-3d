export function drawCircleOnTexture(tex, color, coverage = 0.99) {
    const texWidth = tex.width;
    const textHeigth = tex.height
    const xMid = Math.floor(texWidth * 0.5);
    const yMid = Math.floor(textHeigth * 0.5);
    const PIHalf = Math.PI * 0.5;
    const radiusCoverage = xMid * coverage;

    let theta = 0;
    let x = 0;
    let y = 0;

    for (let w = xMid - 1; w >= 0; --w) {
        theta = (w / radiusCoverage) * PIHalf;
        x = Math.floor(Math.cos(theta) * (radiusCoverage));
        y = Math.floor(Math.sin(theta) * (radiusCoverage));
        tex.pixels[(yMid + y) + ((xMid - x) * texWidth)] = color;
        tex.pixels[(yMid - y) + ((xMid - x) * texWidth)] = color;
        tex.pixels[(yMid + y) + ((xMid + x) * texWidth)] = color;
        tex.pixels[(yMid - y) + ((xMid + x) * texWidth)] = color;
    }
}