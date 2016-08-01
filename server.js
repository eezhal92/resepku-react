import express from 'express'
import compression from 'compression'
import path from 'path'

var app = express()

app.use(compression())
// serve static files
app.use(express.static(path.join(__dirname, 'public')))

// send  all request to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

var port = process.env.PORT || 8081
app.listen(port, function () {
    console.log('Production Express Server running on port : ' + port)
})
