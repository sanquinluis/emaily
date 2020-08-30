if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
  // we are in production - return the prod
} else {
  // we are in Development- return the dev keys
  module.exports = require('./dev');
}
