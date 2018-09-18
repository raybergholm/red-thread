const { settle } = require("./red-thread");

class Spindle {
    constructor() {
        this._promises = []
    }

    addPromise(promise) {
        this._promises.push(promise)
    }

    async settle() {
        return await settle(this._promises);
    }
}

export default Spindle;