importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCT0-IoyIgfRzdIbnXOzou3ZNiKebCrp44",
    authDomain: "task-front-end.firebaseapp.com",
    projectId: "task-front-end",
    storageBucket: "task-front-end.appspot.com",
    messagingSenderId: "1086351074193",
    appId: "1:1086351074193:web:f3018c1c549fa86415f030" 
});

const messaging = firebase.messaging();