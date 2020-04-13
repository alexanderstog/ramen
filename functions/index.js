const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.universities = functions.https.onRequest((request, response) => {
    let universitiesCollection = db.collection('universities');
    let allUniversities = universitiesCollection.get()
    	.then(snapshot => {
        

        let names = [];

        snapshot.forEach(doc => {
          names.push({
            id: doc.id,
            name: doc.data().name,
            votes: doc.data().votes
          })
        });


        response.send(names);
        return null;
    })
    .catch(err => console.log(err));

});



exports.addRamen = functions.https.onRequest(async (request, response) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  let universitiesSelected = db.collection('universities').doc('8eJh5GYRhmVM8oehpIet');

  universitiesSelected.update(
    'votes', FieldValue.increment(1)
  );

  response.send("something happened");

});




  





