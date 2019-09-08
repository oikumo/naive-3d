export class Cube {
    constructor(center, scale) {
        this.center = center

        this.vectors = [
            { x: -1, y: 1, z: -1 }, // a
            { x: 1, y: 1, z: -1 },  // b
            { x: 1, y: 1, z: 1 },  // c             
            { x: -1, y: 1, z: 1 },   // d
            { x: -1, y: -1, z: -1 }, // e
            { x: 1, y: -1, z: -1 }, // f
            { x: 1, y: -1, z: 1 },  // g
            { x: -1, y: -1, z: 1 }  // h
        ]

        let i, v
        for (i = this.vectors.length - 1; i >= 0; --i) {
            v = this.vectors[i]
            v.x *= scale
            v.y *= scale
            v.z *= scale
        }

        this.center = {
            x: this.center.x,
            y: this.center.y,
            z: this.center.z
        }

        this.translate({
            x: this.center.x / 2,
            y: this.center.y / 2,
            z: this.center.z / 2
        })
    }
    transform(t) {
        this.toOrigin()
        this.rotateY(t)
        this.rotateX(t)
        this.toCenter()
    }
    scale(s) {
        this.toOrigin()
        let i, v
        for (i = this.vectors.length - 1; i >= 0; --i) {
            v = this.vectors[i]
            v.x *= s
            v.y *= s
            v.z *= s
        }
        this.toCenter()
    }
    toOrigin() {
        let t
        t = { x: -this.center.x / 2, y: -this.center.y / 2, z: -this.center.z / 2 }
        this.translate(t)
    }
    toCenter() {
        let t
        t = { x: this.center.x / 2, y: this.center.y / 2, z: this.center.z / 2 }
        this.translate(t)
    }
    translate(t) {
        let i, v
        for (i = this.vectors.length - 1; i >= 0; --i) {
            v = this.vectors[i]
            v.x += t.x
            v.y += t.y
            v.z += t.z
        }
    }
    rotateY(angle) {
        let i, v, rX, rZ
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)

        for (i = this.vectors.length - 1; i >= 0; --i) {
            v = this.vectors[i]
            rX = (v.x * cos) + (v.z * sin)
            rZ = (v.x * -sin) + (v.z * cos)

            v.x = rX
            v.z = rZ
        }
    }
    rotateX(angle) {
        let i, v, rY, rZ
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)

        for (i = this.vectors.length - 1; i >= 0; --i) {
            v = this.vectors[i]
            rY = (v.y * cos) + (v.z * -sin)
            rZ = (v.y * sin) + (v.z * cos)

            v.y = rY
            v.z = rZ
        }
    }

}