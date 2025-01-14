import { useContext } from "react";
import { MoviesContext } from "@/contexts/MoviesContext/MoviesContext";

export const useMovieQuery = () => {
    const { movieQuery, setMovieQuery } = useContext(MoviesContext);
    return { movieQuery, setMovieQuery };
};
