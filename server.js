const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
app.use(bodyParser.json())

let events = [
  {uid:1},
  {title:'web dev week'},
  {description:'conference'},
  {date:'03/06/18'},
  {time:'6:00pm'},
  {duration:'2 hours'}
]

app.get('/events', function (req, res) {

  console.log('request info');
  res.send(events)
})

app.post('/events/uid', function (req, res) {
  console.log('events have been posted', port);
  res.send({events:uid})
})

app.post('/events', function (req, res) {

})

app.put('/events', function (req, res) {
  console.log('events have been put', port);
  res.send(events)
})

app.delete('/events', function (req, res) {
  console.log('events have been delete', port);
  res.send(events)
})


app.listen(port, function (){
  console.log('server is up', port);
})
