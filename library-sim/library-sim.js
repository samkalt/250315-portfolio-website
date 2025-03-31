document.addEventListener("DOMContentLoaded", function() {
  
  // DOM Elements
  let librarySection = document.getElementById("library-section");
  
  //Media Object Constructor
  // Book, Movie, and CD are all derived from Media
  class Media {
  constructor(title, isCheckedOut, ratings) {
    this.title = title;
    this.isCheckedOut = isCheckedOut;
    this.ratings = ratings;
  }
  getAverageRating() {
    if (this.ratings.length === 0) return 0;
    let sum = this.ratings.reduce((acc, num) => acc + num, 0);
    return sum / this.ratings.length;
  }
  toggleCheckoutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, isCheckedOut, ratings, author, pages) {
    super(title, isCheckedOut, ratings);
    this.author = author;
    this.pages = pages;
  }
}

class Movie extends Media {
  constructor(title, isCheckedOut, ratings, director, runTime) {
    super(title, isCheckedOut, ratings);
    this.director = director;
    this.runTime = runTime;
  }
}

class CD extends Media {
  constructor(title, isCheckedOut, ratings, artist, songs) {
    super(title, isCheckedOut, ratings);
    this.artist = artist;
    this.songs = songs;
  }
}

// Library Array
// This array holds instances of Book, Movie, and CD objects
let library = [
  new Book("To Kill a Mockingbird", false, 5, "Harper Lee", 281),
  new Book("1984", true, 5, "George Orwell", 328),
  new Book("The Alchemist", false, 5, "Paulo Coelho", 208),
  new Movie("Inception", false, 5, "Christopher Nolan", 148),
  new Movie("The Godfather", true, 5, "Francis Ford Coppola", 175),
  new Movie("The Dark Knight", false, 5, "Christopher Nolan", 152),
  new Movie("Interstellar", true, 5, "Christopher Nolan", 169),
  new Movie("Diary of a Wimpy Kid", false, 5, "Thor Freudenthal", 94),
  new CD("Thriller", false, 5, "Michael Jackson", 12),
  new CD("Back in Black", true, 5, "AC/DC", 6),
  new CD("The Dark Side of the Moon", false, 5, "Pink Floyd", 8),
  new CD("Abbey Road", true, 5, "The Beatles", 7),
  new CD("Rumours", false, 5, "Fleetwood Mac", 14)
];

// Functions
// Add a new media item to the library
function addBook(title, author, pages) {
  const newBook = new Book(title, false, [], author, pages);
  library.push(newBook);
}

function addMovie(title, director, runTime) {
  const newMovie = new Movie(title, false, [], director, runTime);
  library.push(newMovie);
}

function addCD(title, artist, songs) {
  const newCD = new CD(title, false, [], artist, songs);
  library.push(newCD);
}

// Update Library Functions
function updateLibrary(newLibrary) {
  
  librarySection.innerHTML = ''; // Clear the library section before updating it
  
  for (let i = 0; i < newLibrary.length; i++) {
    if (newLibrary[i] instanceof Book) {
      addMediaToLibraryDisplay(newLibrary[i], 'Book');
    } else if (newLibrary[i] instanceof Movie) {
      addMediaToLibraryDisplay(newLibrary[i], 'Movie');
    } else if (newLibrary[i] instanceof CD) {
      addMediaToLibraryDisplay(newLibrary[i], 'CD');
    }
  }
}

function addMediaToLibraryDisplay(mediaItem, mediaType) {
  // Create a new div element for each media item
  const mediaDiv = document.createElement('div');
  mediaDiv.className = 'library-item';

  if (mediaType === 'Book') {
    mediaDiv.innerHTML = `
    <span class="title">${mediaItem.title}</span>
    <img class="data-type" src="./resources/book.png" alt="Book">
    <br>
    <span>Author :</span>
    <span class="author">${mediaItem.author}</span>
    <br>
    <span>Pages :</span>
    <span class="amount">${mediaItem.pages}</span>
    <br>
    <span>Rating :</span>
    <img class="rating" src="./resources/${mediaItem.ratings}.png">
    <br>
    <span>Available :</span>
    <img class="checked-out" src="./resources/yes.png">
    <br>
    <button class="checkout-button">Check Out</button>;`
  } else if (mediaType === 'Movie') {
    mediaDiv.innerHTML = `
    <span class="title">${mediaItem.title}</span>
    <img class="data-type" src="./resources/movie.png" alt="Movie">
    <br>
    <span>Director :</span>
    <span class="author">${mediaItem.director}</span>
    <br>
    <span>Pages :</span>
    <span class="amount">${mediaItem.runTime}</span>
    <br>
    <span>Rating :</span>
    <img class="rating" src="./resources/${mediaItem.ratings}.png">
    <br>
    <span>Available :</span>
    <img class="checked-out" src="./resources/yes.png">
    <br>
    <button class="checkout-button">Check Out</button>;`
  } else if (mediaType === 'CD') {
    mediaDiv.innerHTML = `
    <span class="title">${mediaItem.title}</span>
    <img class="data-type" src="./resources/music.png" alt="CD">
    <br>
    <span>Artist :</span>
    <span class="author">${mediaItem.artist}</span>
    <br>
    <span>Songs :</span>
    <span class="amount">${mediaItem.songs}</span>
    <br>
    <span>Rating :</span>
    <img class="rating" src="./resources/${mediaItem.ratings}.png">
    <br>
    <span>Available :</span>
    <img class="checked-out" src="./resources/yes.png">
    <br>
    <button class="checkout-button">Check Out</button>;`
  } 
  
  librarySection.appendChild(mediaDiv);
}

// Update the checkout status of a media item

// Filter media

updateLibrary(library); // Initialize the library display

});