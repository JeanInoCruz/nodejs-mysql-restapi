import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json' assert { type: 'json' } 

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Funval API', version: '1.0.0' }
  },
  apis: ['./routes/index.routes.js', './routes/employees.routes.js']
}

// Docs in JSON format
// const swaggerSpec = swaggerJSDoc(options)

//ARREGLAR EL ASSERT DE FORMATO JSON

// Function to setup our docs
export const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  // Make our docs in JSON format available
  //   app.get('/api/docs.json', (req, res) => {
  //     res.setHeader('Content-Type', 'application/json')
  //     res.send(swaggerSpec)
  //   })
  console.log(
    `Docs are available on http://localhost:${port}/api/docs`
  )
}

export default swaggerDocs
