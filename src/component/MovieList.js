import MovieCard from "./MovieCard";


function MovieList({movies}) {
    return (
        <div className="style">
       {
           movies.map((movie)=><MovieCard  movie={movie}/>)
       }
        </div>
      );
}

export default MovieList;