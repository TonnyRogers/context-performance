import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovies() {
    const movies = useContext(MovieContext);

    return movies;
}