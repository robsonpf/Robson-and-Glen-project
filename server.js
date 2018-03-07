const express = require('express')
const app = express()
const port = 3000


let events = [{
    id: 0,
    title: "dev week",
    description: "conference",
    date: "03-06-18",
  },
  {
    id: 1,
    title: "tech meetups",
    description: "meetup",
    date: "04-07-19",
  }]

app.get('/events', (req, res) => {
  console.log('get event')
    res.send(events)
})

app.get("/events/:id", (req, res) => {
    if((req.params.id < 0 ) || (req.params.id > events.length  - 1) || isNaN(req.params.id)) {
      console.log("error not found")
      res.sendStatus(404)
    } else {
      res.send(events[req.params.id])
    }
})

app.post('/events', (req, res) => {
  let newEvent = {
    id: events.length,
    title: "new event",
    description: "add event",
    date: "new date"
  }
  events.push(newEvent)
  res.send(events)
})

app.delete('/events/:id', (req, res) => {
  events.forEach((element, index) => {
    if (Number(element.id) === Number(req.params.id)) {
      events.splice(req.params.id, 1)
      console.log("events>>>>>", events);
      res.send(events)
    }
  })
  res.sendStatus(404)
})

app.put('/events/:id', (req, res) => {
  events.forEach((element, index) => {
    if (Number(element.id) === Number(req.params.id)) {
      events[index] = {
        id: Number(req.params.id),
        title: "free beer",
        description: "happy hour",
        date: "tomorrow"
      }
      res.send(events[req.params.id])
    }
  })
  res.sendStatus(404)
})

app.listen(port, () =>
  console.log('server is up'))
