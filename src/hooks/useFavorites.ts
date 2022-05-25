import { useContextSelector } from "use-context-selector";
import { MovieContext } from "../context/MovieContext";

export function useFavorites() {
    // always separate the context to specific selectors 
    // this make react render lifecycle work better
    const favorites = useContextSelector(MovieContext, movieList => movieList.favorites);
    const onAddFavorite = useContextSelector(MovieContext, movieList => movieList.onAddFavorite);
    const onRemoveFavorite = useContextSelector(MovieContext, movieList => movieList.onRemoveFavorite);

    return { favorites, onAddFavorite, onRemoveFavorite };
}