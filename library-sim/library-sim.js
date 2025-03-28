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
    this.runTime = runTime;
  }
}

// Library Array
// This array holds instances of Book, Movie, and CD objects
let library = [
  new Book("To Kill a Mockingbird", false, [5, 4, 5], "Harper Lee", 281),
  new Book("1984", true, [5, 5, 4, 5], "George Orwell", 328),
  new Movie("Inception", false, [5, 5, 4], "Christopher Nolan", 148),
  new Movie("The Godfather", true, [5, 5, 5, 5], "Francis Ford Coppola", 175),
  new CD("Thriller", false, [5, 4, 5, 5], "Michael Jackson", ["Wanna Be Startin' Somethin'", "Thriller", "Beat It"]),
  new CD("Back in Black", true, [5, 5, 4], "AC/DC", ["Hells Bells", "Shoot to Thrill", "Back in Black"])
];

// Functions
// Add a new media item to the library
function addMedia(mediaType, title, extra1, extra2) {
  library.push(media);
}

// Display all media in the library

// Update the checkout status of a media item

// Filter media