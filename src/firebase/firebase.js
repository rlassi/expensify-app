import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').push({
//     description: 'Utilities',
//     note: 'lots of $$$',
//     amount: 30000,
//     createdAt: 0
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// }, (err) => {
//     console.log('Something went wrong:', err)
// });


// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Python'
// });


// database.ref().on('value', (snapshot) => {
//     const { name, job } = snapshot.val()
//     console.log(`${name} is a ${job.title} at ${job.company}`)
// }, (err) => {
//     console.log('An error occured', err);
// });

// database.ref('name').set('Mike')
// database.ref().update({
//     name: 'Nicole Gurgiolo',
//     'job/company': 'Twitter'
// })





















// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (err) => {
//     console.log('Error with data fetching', err)
// });

// setTimeout(() => {
//     database.ref('age').set(36);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 10500);

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((err) => {
//         console.log('Error:', err)
//     });

// database.ref().set({
//     name: 'Ryan Lassiter',
//     age: 33,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Asheville',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('This failed.', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed succesfully');
//     }).catch((err) => {
//         console.log('Something went wrong:', err);
//     });