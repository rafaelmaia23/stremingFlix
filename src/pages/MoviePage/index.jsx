import Title from "@/components/Title";
import Section from "@/components/Section";
import { useEffect, useState } from "react";
import { debounce } from "@/utils/debounce";
import { useMovieSuggestions } from "@/hooks/useMovieSuggestions";
import SearchInput from "@/components/SearchInput";
import SuggestionsList from "@/components/SuggestionsList";
import Form from "@/components/Form";
import { useMovieQuery } from "@/hooks/useMovieQuery";
import { useSelectedMovie } from "@/hooks/useSelectedMovie";
import { useMovies } from "@/hooks/useMovies";
import { useParams } from "react-router";

const MoviePage = ({ type = "add" }) => {
    const parameters = useParams();
    const { id } = parameters;
    const { movieSuggestions, setMovieSuggestions, fetchMovieSuggestions } =
        useMovieSuggestions();
    const { movieQuery, setMovieQuery } = useMovieQuery();
    const { setSelectedMovie } = useSelectedMovie();
    const { movies, addMovie } = useMovies();
    const [focused, setFocused] = useState(false);

    const debounceFetchMoviesOptions = debounce(fetchMovieSuggestions, 500);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setMovieQuery(value);
        debounceFetchMoviesOptions(value);
    };

    useEffect(() => {
        setMovieSuggestions([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setMovieQuery("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        id
            ? setSelectedMovie(movies.find((movie) => movie.id === id))
            : setSelectedMovie(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    const handleSuggestionListMouseDown = (event) => {
        // Impede que o onBlur seja disparado ao clicar dentro do SuggestionsList
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addMovie();
    };

    return (
        <>
            {type === "add" ? (
                <Title align="left">
                    <h1>Procure um filme para adicionar na sua lista:</h1>
                </Title>
            ) : (
                <Title align="left">
                    <h1>Edite ou exclua o filme:</h1>
                </Title>
            )}

            {type === "add" && (
                <Section>
                    <SearchInput
                        value={movieQuery}
                        onChange={handleInputChange}
                        placeholder="Digite o nome do filme"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {focused && movieSuggestions.length > 0 && (
                        <div onMouseDown={handleSuggestionListMouseDown}>
                            <SuggestionsList itens={movieSuggestions} />
                        </div>
                    )}
                </Section>
            )}

            <Section>
                <Form onSubmit={handleSubmit} type={type} />
            </Section>
        </>
    );
};

export default MoviePage;
