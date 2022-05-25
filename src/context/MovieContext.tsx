import { createContext, ReactNode, useState } from "react";

type Movie = {
    id: number;
    name: string;
    age: number;
    rate: number;
}

type MovieContextType = {
    movies: Movie[];
    onAddMovie: (movie: Omit<Movie, 'id'>) => void;
    onRemoveMovie: (id: number) => void;
}

export const MovieContext = createContext({} as MovieContextType);

export function MovieProvider({ children }: { children: ReactNode }) {
    const [movies, setMovies] = useState<Movie[]>([ 
        { age: 2000, name: 'A Procura da Felicidade', rate: 8, id: 1 }
    ]);

    function onAddMovie (mov: Omit<Movie, 'id'>) {
        const movie = {
            ...mov,
            id: Math.ceil(Math.random() * 100),
        }

        setMovies([...movies, movie]);
    }

    function onRemoveMovie (id: number) {
        const movieList = movies;
        movieList.splice(id,1);
        setMovies([...movieList]);
    }

    return (
        <MovieContext.Provider value={{
            movies,
            onAddMovie,
            onRemoveMovie
        }} >
            {children}
        </MovieContext.Provider>
    )
}