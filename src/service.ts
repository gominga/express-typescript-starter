import sampleProducts from './sample-data/products.json'

export class Service {
    constructor(private products = sampleProducts) {
    }

    findAll() {
        return this.products
    }

    hello() {
        return "Hello"
    }
}