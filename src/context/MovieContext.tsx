import { ReactNode, useCallback, useState } from "react";
import { createContext } from 'use-context-selector'; 

//old
// import { createContext } from "react";

type Movie = {
    id: number;
    name: string;
    age: number;
    rate: number;
}

type MovieContextType = {
    movies: Movie[];
    favorites: Movie[];
    onAddMovie: (movie: Omit<Movie, 'id'>) => void;
    onRemoveMovie: (id: number) => void;
    onAddFavorite: (id: number) => void;
    onRemoveFavorite: (id: number) => void;
}

// change the import of createContext to the use-context-selector
export const MovieContext = createContext({} as MovieContextType);

export function MovieProvider({ children }: { children: ReactNode }) {
    const [movies, setMovies] = useState<Movie[]>([ 
        { age: 2000, name: 'A Procura da Felicidade', rate: 8, id: 1 }
    ]);
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const onAddMovie = useCallback((mov: Omit<Movie, 'id'>) => {
        const movie = {
            ...mov,
            id: Math.ceil(Math.random() * 100),
        }

        setMovies([...movies, movie]);
    }, [movies]);

    const onRemoveMovie = useCallback((id: number) => {
        const movieList = movies;
        movieList.splice(id,1);
        setMovies([...movieList]);
    }, [movies]);

    const onAddFavorite = useCallback((id: number) => {
        setFavorites([...favorites, movies[id]]);
        onRemoveMovie(id);
    },[favorites, movies, onRemoveMovie]);

    const onRemoveFavorite = useCallback((id: number) => {
        setMovies([...movies, favorites[id]]);
        const favoriteList = favorites;
        favoriteList.splice(id,1);
        setFavorites([...favoriteList]);
    },[favorites, movies]);

    return (
        <MovieContext.Provider value={{
            movies,
            favorites,
            onAddMovie,
            onRemoveMovie,
            onAddFavorite,
            onRemoveFavorite,
        }} >
            {children}
        </MovieContext.Provider>
    )
}