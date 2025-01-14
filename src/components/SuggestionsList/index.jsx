import styled from "styled-components";
import SuggestionItem from "@/components/SuggestionsList/SuggestionItem";
import MovieCard from "@/components/MovieCard";
import { useSelectedMovie } from "@/hooks/useSelectedMovie";

const StyledSuggestionsList = styled.ul`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--cool-gray);
    border: 3px solid var(--aqua-blue);
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    margin: 0;
    max-height: 600px;
    overflow-y: auto;
    z-index: 100;
    list-style-type: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const SuggestionsList = ({ itens }) => {
    const { onSelectedMovie } = useSelectedMovie();
    return (
        <StyledSuggestionsList>
            {itens.map((iten) => (
                <SuggestionItem key={iten.id}>
                    <StyledButton onClick={() => onSelectedMovie(iten.id)}>
                        <MovieCard
                            movie={iten}
                            width="130px"
                            height="240px"
                            overlay={false}
                            titleLength={20}
                            titleColor="var(--black)"
                        />
                    </StyledButton>
                </SuggestionItem>
            ))}
        </StyledSuggestionsList>
    );
};

export default SuggestionsList;
