import express from 'express'
import { Service } from './service'

const app = express()

const service = new Service()

app.get('/', (req, res) => {
    res.send(service.hello())
});

const port = 3010
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

