import styled from "styled-components";

const StyledSuggestionItem = styled.li`
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.25rem;
    gap: 0.5rem;
    cursor: pointer;
`;

const SuggestionItem = ({ children }) => {
    return <StyledSuggestionItem>{children}</StyledSuggestionItem>;
};

export default SuggestionItem;
