// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA16tGcDBFZ9uyYBQYxYpTE1MGRkZGGrRM",
    authDomain: "my-awesome-poject-42867.firebaseapp.com",
    projectId: "my-awesome-poject-42867",
    storageBucket: "my-awesome-poject-42867.appspot.com",
    messagingSenderId: "683085419860",
    appId: "1:683085419860:web:90510de8b0a81ac13624c1",
    measurementId: "G-0V55YHRD23" }
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase database
  const database = firebase.database();

  import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABAS E_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
  
  // Function to add a movie
  function addMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const releaseDate = document.getElementById('releaseDate').value;
  
    // TODO: Implement code to add movie to Firebase database
  }
  
  // Function to display movies
  function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
  
    // TODO: Implement code to display movies in the UI
  }
  
  // Function to mark a movie as watched
  function markAsWatched(key) {
    // TODO: Implement code to update "watched" status in Firebase database
  }
  
  // Function to search for a movie by title
  function searchMovie() {
    const searchTitle = document.getElementById('searchTitle').value;
  
    // TODO: Implement code to search for a movie in Firebase database
  }
  
  // TODO: Implement code to listen for changes in the database and update the movie list
  
  