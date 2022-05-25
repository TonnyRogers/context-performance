import { useContextSelector } from "use-context-selector";
// import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovies() {
    // always separate the context to specific selectors 
    // this make react render lifecycle work better
    const movies = useContextSelector(MovieContext, movieList => movieList.movies);
    const onAddMovie = useContextSelector(MovieContext, movieList => movieList.onAddMovie);
    const onRemoveMovie = useContextSelector(MovieContext, movieList => movieList.onRemoveMovie);

    return { movies, onAddMovie, onRemoveMovie, };
}

// old
// export function useMovies() {
    // const movies = useContext(MovieContext);
    // return movies;
// }