const fx = defaults => op => {
    op = Object.assign({}, defaults, op)
}

const map = fn => array => array.map(fn)
const pluck = key => object => object[key]

const vals = [1, 3, 4, 5]

var p = map(pluck(1))
let xx = p(vals)

const multiply = x => y => x * y
let mult2 = multiply(2)
let mult3 = multiply(3)

let r2 = mult2(5)
let r3 = mult3(10)

// Crear clon
const o1 = {
    a: 1,
    b: 2
}
const o2 = Object.assign({}, o1)

const o3 = {
    c: 1
}

let o4 = {}

const o5 = Object.assign(o4, o3, o1, o2, null, undefined)

const log = (...args) => {
    console.log(...args)
}


log("sdsd", "fsfsd", 12)

function Square(x, y) {
    this.x = x
    this.y = y
}

Square.prototype.moveBy =
    function (dx, dy) {
        this.x += dx
        this.y += dy
    }

let s = new Square(1, 1)
s.moveBy(3, 3)

// Inmuability
const createPoint = (x, y) => Object.freeze([x, y])
const movePointBy = ([x, y], dx, dy) => {
    return Object.freeze([x + dx, y + dy])
}

let point = createPoint(0, 0)
point = movePointBy(point, 5, 5)
point = movePointBy(point, -2, 2)

let res0 = point

const createAdder = (x) => {
    return (y) => x + y
}

const add4 = createAdder(4)
let res1 = add4(20)

const add = (x, y) => x + y

const partial = (f, ...args) => {
    return (...otherArgs) => {
        return f(...args, ...otherArgs)
    }
}

const add3 = partial(add, 3)
let res2 = add3(2)
