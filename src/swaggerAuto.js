import swaggerAutogen from 'swagger-autogen'

// const doc = {
//   info: {
//     title: 'My API',
//     description: 'Description'
//   },
//   host: 'localhost:3000'
// }

const doc = {
  info: {
    version: '1.0.0', // by default: '1.0.0'
    title: 'NodeJS-MySQL-RestAPI-Tutorial', // by default: 'REST API'
    description: 'Desarrollando uan RestApi desde cero y hacinedo un deploy en Railway' // by default: ''
  },
  servers: [
    {
      url: 'localhost:3000', // by default: 'http://localhost:3000'
      description: 'Ruta base del proyecto local' // by default: ''
    }
    // { ... }
  ],
  tags: [ // by default: empty Array
    {
      name: '', // Tag name
      description: '' // Tag description
    }
    // { ... }
  ],
  components: {} // by default: empty object
}

const outputFile = './swagger-output.json'
const routes = ['./routes/index.routes.js', './routes/employees.routes.js']
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc)
