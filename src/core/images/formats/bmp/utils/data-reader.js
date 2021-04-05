import { unreversebytes } from './bytes-utils.js';

export class DataReader {
    constructor(data) {
        this.data = data;
        this.cursor = 0;
    }

    slice(bytes) {
        const dataSlice = this.data.slice(this.cursor, this.cursor + bytes);
        this.cursor += bytes;
        return dataSlice;
    }

    seekFromCursor(offset) {
        this.cursor += offset;
    }

    nextString(bytes) {
        return String.fromCharCode.apply(null, this.slice(bytes));
    }

    nextReversedNumber(bytes) {
        return unreversebytes(this.slice(bytes));
    }
}