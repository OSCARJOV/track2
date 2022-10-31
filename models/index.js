const { model } = require('mongoose')

const models = {

    userModel: require('./nosql/users'),
    tracksModel: require('./nosql/tracks'),
    storageModel: require('./nosql/storage')
}

module.exports = models