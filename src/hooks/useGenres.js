import { useContext } from "react";
import { GenresContext } from "@/contexts/GenresContext/GenresContext";

export const useGenres = () => {
    const { genres, setGenres, getGenreNames } = useContext(GenresContext);
    return { genres, setGenres, getGenreNames };
};
