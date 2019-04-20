import { Texture } from '../../js/textures/texture.js'

describe('Create texture', function () {
    it('Red texture', function () {
        const tex = new Texture(100, 100)
        const red = parseInt(0xFF0000FF)
        const filler = {
            getColor: () => red
        }
        tex.fill(filler)
        chai.expect(tex.pixels[0]).to.equals(red)
    });
});