import { useContext } from "react";
import { MoviesContext } from "@/contexts/MoviesContext/MoviesContext";

export const useSelectedMovie = () => {
    const { selectedMovie, setSelectedMovie, onSelectedMovie } =
        useContext(MoviesContext);
    return {
        selectedMovie,
        setSelectedMovie,
        onSelectedMovie,
    };
};
