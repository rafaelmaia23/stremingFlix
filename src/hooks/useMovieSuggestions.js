import { useContext } from "react";
import { MoviesContext } from "@/contexts/MoviesContext/MoviesContext";

export const useMovieSuggestions = () => {
    const { movieSuggestions, setMovieSuggestions, fetchMovieSuggestions } =
        useContext(MoviesContext);
    return {
        movieSuggestions,
        setMovieSuggestions,
        fetchMovieSuggestions,
    };
};
