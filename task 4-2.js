class Movie {
    constructor(id, title, genre, available) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.available = available;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
      this.rentedMovies = [];
    }
  
    addMovie(title, genre) {
      const id = this.movies.length + 1;
      const movie = new Movie(id, title, genre, true);
      this.movies.push(movie);
      return movie;
    }
  
    rentMovie(movieId) {
      const movieIndex = this.movies.findIndex((movie) => movie.id === movieId);
  
      if (movieIndex !== -1 && this.movies[movieIndex].available) {
        this.movies[movieIndex].available = false;
        this.rentedMovies.push(this.movies[movieIndex]);
        return this.movies[movieIndex];
      } else {
        return null; // Movie not found or not available
      }
    }
  
    viewAvailableMovies() {
      return this.movies.filter((movie) => movie.available);
    }
  
    viewRentedMovies() {
      return this.rentedMovies;
    }
  }
  
  const movieStore = new MovieStore();

  const movie1 = movieStore.addMovie('Inception', 'Sci-Fi');
  const movie2 = movieStore.addMovie('The Shawshank Redemption', 'Drama');

  const rentedMovie = movieStore.rentMovie(movie1.id);
  
  if (rentedMovie) {
    console.log(`${rentedMovie.title} has been rented.`);
  } else {
    console.log('Movie not available for rent.');
  }

  console.log('\nAvailable Movies:');
  console.log(movieStore.viewAvailableMovies());
  
  console.log('\nRented Movies:');
  console.log(movieStore.viewRentedMovies());
  