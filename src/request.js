const { requestFactory } = require('cozy-konnector-libs')

const baseUrl = 'http://www.pajemploi.urssaf.fr/pajeweb'

const request = requestFactory({
  cheerio: true,
  // debug: true,
  jar: true,
  json: false
})

module.exports = {
  baseUrl,
  request
}
