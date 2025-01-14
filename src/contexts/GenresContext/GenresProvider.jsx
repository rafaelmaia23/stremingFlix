import { useEffect, useState } from "react";
import { GenresContext } from "@/contexts/GenresContext/GenresContext";
import axios from "axios";

export const GenresProvider = ({ children }) => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const [genres, setGenres] = useState([]);

    const fetchLocalGenres = async () => {
        try {
            const response = await fetch(" http://localhost:3000/genres");
            const data = await response.json();
            setGenres(data);
        } catch (error) {
            console.error("Erro ao buscar generos:", error);
        }
    };

    //fetch lista de generos do TMDB
    const fetchGenresFromAPI = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list",
                {
                    params: {
                        api_key: API_KEY,
                    },
                }
            );
            setGenres(response.data.genres);
        } catch (error) {
            console.error("Erro ao buscar generos:", error);
        }
    };

    //retorna os nomes dos generos a partir de seus ids da lista de generos local
    const getGenreNames = (ids) => {
        return genres
            .filter((genre) => ids.includes(genre.id))
            .map((genre) => genre.name)
            .join(", ");
    };

    useEffect(() => {
        fetchGenresFromAPI();
    }, []);

    return (
        <GenresContext.Provider
            value={{
                genres,
                setGenres,
                getGenreNames,
                fetchLocalGenres,
                fetchGenresFromAPI,
            }}
        >
            {children}
        </GenresContext.Provider>
    );
};
