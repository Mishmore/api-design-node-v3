import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hi' })
})

// const routes = [
//   'get /cat',
//   'get /cat/:id',
//   'post /cat',
//   'put /cat/:id',
//   'delete /cat/:id'
// ]

router
  .route('/cat')
  .get()
  .post()

router
  .route('/cat/:id')
  .get()
  .put()
  .delete()

app.use('/api', router)

const log = (req, res, next) => {
  console.log('logging')

  // No args
  // Just if error must be passed
  next()
}

// CRUD
app.get('/', (req, res) => {
  res.send({ data: req.mydata })
})

app.put('/data', (req, res) => {})

// app.get('/data', [log, log, log], (req, res) => {
// They are sync
app.get('/data', log, (req, res) => {
  res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

export const start = () => {
  app.listen(8080, () => {
    console.log(`Server is on port 8080`)
  })
}
