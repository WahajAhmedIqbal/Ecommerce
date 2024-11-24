const express = require('express')
const dataRoutes = require('./routes/dataRoutes')

// initilizing app
const app = express();


const PORT = process.env.PORT || 3000
// calling server
app.listen(PORT, () => { console.log(`Server is listing on ${PORT}`) })

app.use('/', dataRoutes)