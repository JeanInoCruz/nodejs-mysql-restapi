import express from 'express'
import { PORT } from './config.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import swaggerDocs from './swagger.js'

const app = express()

app.use(express.json())
swaggerDocs(app, PORT)

// Routes
app.use('/', indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

export default app
