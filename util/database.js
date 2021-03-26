const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
//this will connect to my database usng the url string
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://hannah_hitchcock12:Purple12@cluster0.mzrnx.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

//exports mongoConnect and getDb
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
