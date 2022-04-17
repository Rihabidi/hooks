import { useState } from "react";
import {Data} from './Data'
import MovieList from "./component/MovieList";
import './App.css'
import AddMovie from './component/AddMovie';


function App () {
  const [movies,setMovies]=useState(Data)
  const AddFilm = (newFilm) => {
    setMovies([...movies, newFilm]);
  };
 
  return (  
    <div>
       <AddMovie AddFilm={AddFilm}/><br/><br/>
    <MovieList movies={movies}/>
    
   
    </div>
  );
}

export default App ;


