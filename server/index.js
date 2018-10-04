const express = require('express');
const { json } = require('body-parser')
const cors = require('cors')
const {getSeries, addSeries, deleteSeries} = require('./main_crtl')

const port= 3001

const app = express()
app.use(json())
app.use(cors())

app.get('/api/test', getSeries)
app.post('/api/test', addSeries)
app.delete('/api/test/:deleteIndex', deleteSeries)



app.listen(port, () => {
    console.log(`We are live on port: ${port}`)
})