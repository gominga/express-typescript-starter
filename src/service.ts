import products from './sample-data/products.json'

export class Service {
    constructor() {
    }

    findAll() {
        return products
    }

    hello() {
        return "Hello"
    }
}