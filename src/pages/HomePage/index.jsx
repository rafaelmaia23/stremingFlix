import Title from "@/components/Title";
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import MoviesList from "@/components/MoviesList";
import { useMovies } from "@/hooks/useMovies";
import { useGenres } from "@/hooks/useGenres";
import { useEffect } from "react";
import Modal from "@/components/Modal";

const HomePage = () => {
    const { movies, movieBanner, fetchPopularMovie } = useMovies();
    const { genres } = useGenres();

    useEffect(() => {
        const fetchBanner = async () => {
            await fetchPopularMovie();
        };
        fetchBanner();
    }, []);

    const getMoviesByGenre = (genreId) => {
        return movies.filter((movie) => movie.genre_ids.includes(genreId));
    };

    const genresWithMoviesCount = genres.map((genre) => {
        const moviesForGenre = getMoviesByGenre(genre.id);
        return {
            ...genre,
            movieCount: moviesForGenre.length,
            movies: moviesForGenre,
        };
    });

    const sortedGenres = genresWithMoviesCount.sort(
        (a, b) => b.movieCount - a.movieCount
    );

    return (
        <>
            <Title margin="0 0 1rem 0" align="left">
                <h1>Organize os filmes que você quer ver!</h1>
            </Title>
            <Section>
                <Banner
                    title="Recomendamos para você:"
                    movie={movieBanner}
                    addButton={true}
                />
            </Section>

            <Section>
                {movies.length > 0 ? (
                    <>
                        <MoviesList movies={movies} title="Seus filmes:" />
                        {sortedGenres.map((genre) => {
                            return (
                                <MoviesList
                                    key={genre.id}
                                    movies={genre.movies}
                                    title={genre.name}
                                />
                            );
                        })}
                    </>
                ) : (
                    <Title align="center">
                        <h2>Nenhum filme adicionado...</h2>
                    </Title>
                )}
            </Section>
            <Modal />
        </>
    );
};

export default HomePage;
