const express = require('express')//servidor de backend
const mongoose = require('mongoose') //conexion con mongodb
const dotenv = require('dotenv'); //uso de variables de entorno
const Product = require('./models/product.model.js'); // importacion de la iterfaz de producto
const productRoute = require('./routes/product.route.js')


dotenv.config();
const app = express()

const port = process.env.PORT
const dbpass = process.env.DBPASS
const dbusr = process.env.DBUSR

//routes
app.use('/products',productRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/healthcheck', (req, res) => {//prove server status
  res.send('Server is running OK')
})


mongoose.connect(`mongodb+srv://${dbusr}:${dbpass}@ca-backend.6z1hzkq.mongodb.net/CA_api`) // ca-backend is selected database, CA_api is selected database colection
.then(() => {
  console.log('Connected!')
  app.listen(port, () => {
      console.log(`Server running in port ${port}`)
    })
})
.catch(()=>{
  console.log('Connection failed!')
})


/*usr: acaaron25
pass: LqXwG6SbGOJUtpKe

mongodb+srv://acaaron25:<password>@ca-backend.6z1hzkq.mongodb.net/
 */