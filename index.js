import express, { json } from 'express'
import productRoutes from './server/routes/products.routes.js'
import {PORT} from './config.js'
import {pool} from './server/db.js'

const app = express()

// config
app.set('json spaces',2)
app.use(express.json())


app.get('/', async  (req,res) =>{
    const [result] = await pool.query('SELECT * FROM products')
    console.log(result)
})

app.use('/api/products',productRoutes)


app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})