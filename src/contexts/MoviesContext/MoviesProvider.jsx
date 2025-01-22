import { useEffect, useState } from "react";
import { MoviesContext } from "@/contexts/MoviesContext/MoviesContext";
import axios from "axios";
import { useGenres } from "../../hooks/useGenres";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

export const MoviesProvider = ({ children }) => {
    const navigate = useNavigate();
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const LOCAL_DB_URL = "http://localhost:3000/movies";
    const [movies, setMovies] = useState([]);
    const [movieSuggestions, setMovieSuggestions] = useState("");
    const [movieQuery, setMovieQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { getGenreNames } = useGenres();
    const [movieBanner, setMovieBanner] = useState(null);

    //carrega os filmes da DB local
    useEffect(() => {
        fetchMovies();
    }, []);

    //busca os filmes no TMDB para sugestões de adição
    const fetchMovieSuggestions = async (searchTerm) => {
        if (searchTerm.trim().length > 0) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie`,
                    {
                        params: {
                            api_key: API_KEY,
                            query: searchTerm,
                        },
                    }
                );
                setMovieSuggestions(response.data.results);
            } catch (error) {
                console.error("Erro ao buscar opções de filmes:", error);
            }
        } else {
            setMovieSuggestions([]);
        }
    };

    //busca uma recomendação de filme popular no TMDB
    const fetchPopularMovie = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular`,
                {
                    params: {
                        api_key: API_KEY,
                        language: "pt-BR",
                        page: 1,
                    },
                }
            );
            const movies = response.data.results;
            const goodMovies = movies.filter((movie) => movie.popularity > 50);
            const randomMovie =
                goodMovies[Math.floor(Math.random() * goodMovies.length)];
            const movie = await fetchMovieDetails(randomMovie.id);
            const directors = await fetchDirectors(randomMovie.id);
            const appMovie = mapAppMovie(movie, directors);

            setMovieBanner(appMovie);
        } catch (error) {
            console.error("Erro ao buscar filme popular:", error);
        }
    };

    //busca os detalhes do filme no TMDB
    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}`,
                {
                    params: {
                        api_key: API_KEY,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar detalhes do filme:", error);
        }
    };

    //busca os diretores do filme no TMDB
    const fetchDirectors = async (movieId) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}/credits`,
                {
                    params: {
                        api_key: API_KEY,
                    },
                }
            );
            const data = response.data;
            const directors = data.crew
                .filter((member) => member.job === "Director")
                .map((director) => director.name)
                .join(", ");
            return directors;
        } catch (error) {
            console.error("Erro ao buscar créditos do filme:", error);
        }
    };

    //mapeia os dados do filme para o formato da aplicação
    const mapAppMovie = (movie, directors) => {
        const appMovie = {
            id: movie.id,
            title: movie.title,
            duration: movie.runtime,
            release: movie.release_date,
            score: movie.vote_average,
            overview: movie.overview,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            genre_ids: movie.genres.map((genre) => genre.id),
            directors: directors,
        };

        return appMovie;
    };

    //busca os detalhes do filme e os diretores e seta o filme selecionado no form
    const onSelectedMovie = async (movieId) => {
        try {
            //buscar os detalhes do filme e os diretores
            const movie = await fetchMovieDetails(movieId);
            const directors = await fetchDirectors(movieId);
            //criar objeto do filme completo
            const appMovie = mapAppMovie(movie, directors);
            //pega os nomes dos generos
            const genreNames = getGenreNames(appMovie.genre_ids);
            //setar os nomes dos generos no filme
            appMovie.genre_names = genreNames;
            //setar o filme completo no selectedMovie
            setSelectedMovie(appMovie);
        } catch (error) {
            console.error("Erro ao buscar detalhes do filme:", error);
        }
        //limpar a lista de sugestões
        setMovieSuggestions([]);
        //limpar a query de busca
        setMovieQuery("");
    };

    //busca os filmes na DB local
    const fetchMovies = async () => {
        try {
            const response = await axios.get(LOCAL_DB_URL);
            setMovies(response.data);
        } catch (error) {
            console.error("Erro ao buscar filmes na DB local:", error);
        }
    };

    //adiciona o filme selecionado na lista db local
    const addMovie = async () => {
        if (selectedMovie.id === "" || selectedMovie.id === null) {
            selectedMovie.id = uuidv4();
        }
        try {
            await axios.post(LOCAL_DB_URL, selectedMovie, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Erro ao adicionar filme na DB local:", error);
        }
        setSelectedMovie(null);
        fetchMovies();
        //navegar para home
        navigate("/");
    };

    //editar filme na lista db local
    const editMovie = async (movieId) => {
        try {
            await axios.put(`${LOCAL_DB_URL}/${movieId}`, selectedMovie, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Erro ao editar filme na DB local:", error);
        }
        setSelectedMovie(null);
        fetchMovies();
        //navegar para home
        navigate("/");
    };

    //remove filme da lista db local
    const removeMovie = async (movieId) => {
        try {
            await axios.delete(`${LOCAL_DB_URL}/${movieId}`);
        } catch (error) {
            console.error("Erro ao remover filme da DB local:", error);
        }
        fetchMovies();
        //navegar para home
        navigate("/");
    };

    //retorna o provider com os valores e funções do contexto
    return (
        <MoviesContext.Provider
            value={{
                movies,
                setMovies,
                movieQuery,
                setMovieQuery,
                movieSuggestions,
                setMovieSuggestions,
                fetchMovieSuggestions,
                selectedMovie,
                setSelectedMovie,
                onSelectedMovie,
                addMovie,
                editMovie,
                removeMovie,
                movieBanner,
                fetchPopularMovie,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};
