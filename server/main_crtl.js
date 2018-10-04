const axios = require('axios')

var series = []

function getSeries(req, res, next) {
    axios.get('http://www.amiiboapi.com/api/gameseries').then(response => {
        series = response.data.amiibo
        res.status(200).send(series)
    }).catch(err => res.status(500).send(err))
}

function addSeries(req, res, next) {
    series.push(req.query.newSeries)
    res.status(200).send(series)
}

function deleteSeries(req, res, next) {
   let removed = series.splice(req.params.deleteIndex, 1)
   console.log(removed)
    res.status(200).send(series)
}


module.exports = {
    getSeries,
    addSeries,
    deleteSeries
}