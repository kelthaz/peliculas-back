import express from 'express'
import { BD } from './db.js'
import { PORT } from './config.js'


const app = express()

app.get('/', async (req, res) => {
    const rows = await BD.query('SELECT * from peliculas')
    res.json(rows)
})

app.get('/crearPelicula', async (req,res) =>{
    const resultado = await BD.query('INSERT INTO peliculas(nombre) VALUES ("Guerra de las galaxias")')
    res.json(resultado)
})

app.listen(PORT)
console.log('Server en puerto:', PORT)