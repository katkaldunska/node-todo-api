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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({a: 'a'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({b: '5'}).then((result) => {
    //   console.log(result);
    // });

    client.close();
});
