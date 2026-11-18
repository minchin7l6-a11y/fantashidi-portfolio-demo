const { requestMenu } = require('./core-client')

// Placeholder only. A private implementation must be provided separately.
const privateCore = null

requestMenu(privateCore)
  .then(menu => console.log(menu))
  .catch(error => console.error(error.message))
