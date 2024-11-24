const express = require('express')
const routes = express.Router();


routes.get('/', async (req, res) => {
    await res.send('this is routes test')
})


module.exports = routes;