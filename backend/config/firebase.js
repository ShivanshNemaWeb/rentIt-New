
const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rentit-d74c4-default-rtdb.firebaseio.com/"
  });

exports.firestore = admin.firestore();
