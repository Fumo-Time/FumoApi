import express from 'express'
import fs from 'node:fs'

const app = express()
const fumos: string[] = fs.readdirSync('fumos')

const port = process.env.PORT || 3000

app.use('/fumos', express.static('fumos'))

app.get('/', (req, res) => {
    res.send('Fumo bot api ᗜˬᗜ')
})

app.get('/random', (req, res) => {
    const fumo = fumos[Math.floor(Math.random() * fumos.length)]

    console.log('[GET] /random', fumo, req.headers['content-type'] ? req.headers['content-type'] : 'none')

    const contype = req.headers['content-type']

    if(contype === 'application/json') {
        const url = `${req.protocol}://${req.header('host')}/fumos/${fumo}`
        return res.send({ url })
    }

    res.redirect('fumos/' + fumo)
})

app.listen(port, () => {
    console.log('ᗜˬᗜ Fumo api started on', port)
})
