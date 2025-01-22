import MovieCard from "@/components/MovieCard";
import Title from "@/components/Title";
import styled from "styled-components";
import { useModal } from "@/hooks/useModal";

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

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoviesList = ({ movies, title }) => {
    const { openModal } = useModal();
    return (
        movies.length > 0 && (
            <StyledSection>
                <Title align="left" margin="1rem 0">
                    <h2>{title}</h2>
                </Title>
                <StyledMoviesSection>
                    {movies.map((movie) => (
                        <StyledButton
                            key={movie.id}
                            onClick={() => openModal(movie)}
                        >
                            <MovieCard movie={movie} simbol={true} />
                        </StyledButton>
                    ))}
                </StyledMoviesSection>
            </StyledSection>
        )
    );
};

export default MoviesList;
