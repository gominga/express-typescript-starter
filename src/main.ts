import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
});

const port = 3010
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

