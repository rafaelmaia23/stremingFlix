import { useContext } from "react";
import { MoviesContext } from "@/contexts/MoviesContext/MoviesContext";

export const useMovies = () => {
    const {
        movies,
        setMovies,
        addMovie,
        editMovie,
        removeMovie,
        movieBanner,
        fetchPopularMovie,
    } = useContext(MoviesContext);

    return {
        movies,
        setMovies,
        addMovie,
        editMovie,
        removeMovie,
        movieBanner,
        fetchPopularMovie,
    };
};
