/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="w-[260px] h-[380px] relative rounded-xl overflow-hidden shadow-md m-5 hover:shadow-xl hover:shadow-slate-500">
        <div className=" absolute p-4 w-auto rounded-br-xl top-0 bg-blue-950 font-bold text-[#f9d3b4] ">
          <p>{movie.Year}</p>
        </div>

        <div className="w-full h-full">
          <img
            className="w-full h-full"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "http://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>

        <div className=" z-[2] bg-blue-950 pt-4 pr-6 pb-6 pl-6 absolute bottom-0 right-0 left-0 ">
          <span className=" uppercase text-xs font-medium text-[#f0f0f0]">
            {movie.Type}
          </span>
          <h3 className=" mt-1 text-[#f9d3b4] font-bold ">{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
