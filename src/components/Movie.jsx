import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3e59950e";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    getMovie("Superman");
  }, []);

  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Search Movie"
          className=" px-10 py-5 lg:w-[500px] mt-10 rounded-full shadow-lg bg-transparent text-black shadow-slate-400 text-lg focus:outline-none sm:w-[250px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon
          className="-ml-10 text-lg"
          icon={faSearch}
          onClick={() => getMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className=" w-full flex flex-wrap justify-center items-center px-10 mt-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center mt-10">
          <h2 className=" text-xl text-[#f9d3b4] ">No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Movie;
