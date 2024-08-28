
import express from 'express'
import {pool} from './db.js'

const app = express()

app.get('/', (req, res)=>{
    res.send('Hola aqui estamos')
}) 

app.get('/ping', (req, res)=>{
    const [result] = pool.query("select 'hola mundo' as result");
    res.json(result[0])
});

app.listen(3000)
console.log('Server en port 3000')

/*
import {PORT} from './config.js'
*/


/*
app.get('/', async(req, res)=>{
    const rows = await pool.query("select * from preguntas")
    res.json(rows)
})



app.get('/create', async(req, res)=>{
    const result = await pool.query("INSERT INTO preguntas (texto, tipo, fecha, estado) VALUES ('¿Ajuste Datafano?', 'radio', CURDATE(), 0)");
    res.json(result)
});


*/