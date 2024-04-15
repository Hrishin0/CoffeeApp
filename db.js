const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://hrishin:!h5!h]MNnz5U4D!@cluster0.mt3gwvz.mongodb.net/'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
    },
    getDb: () => dbConnection
}



// kaggle datasets download -d schmoyote/coffee-reviews-dataset
