import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const StyledMoviesSection = styled.section`
    display: flex;
    overflow-x: scroll;
    gap: 1rem;
    padding: 0.7rem 0.5rem;
    box-sizing: border-box;
`;

const MoviesList = ({ movies, title }) => {
    return (
        movies.length > 0 && (
            <StyledSection>
                <Title align="left" margin="1rem 0">
                    <h2>{title}</h2>
                </Title>
                <StyledMoviesSection>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} simbol={true} />
                    ))}
                </StyledMoviesSection>
            </StyledSection>
        )
    );
};

export default MoviesList;
