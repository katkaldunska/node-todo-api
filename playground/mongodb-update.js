const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  {useNewUrlParser: true},
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("5b49c8b0a6481a83cae6966b")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //   console.log(results);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5b462fa3b4394600752299db")
    }, {
      $set: {
        name: 'Bambirussa'
      },
      $inc: {
        age: 1
      }
    }, {
        returnOriginal: false
    }).then((results) => {
      console.log(results);
    });

    client.close();
});
