import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }; // data that will change, you put it in the state.

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });//this.setState({ movies: movies });
  };

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 2000);
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section class="container">{isLoading
      ? (
        <div class="loader">
          <span class="loader__text">Loading...</span>
        </div>
      )
      : (
        <div class="movies">
          {
            movies.map(movie => (
              <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
            ))
          }
        </div>
      )}
    </section>;
  }
}

export default App;