import styled from "styled-components";

const StyledSearch = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 3px solid var(--cool-gray);
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    outline: none;
    &:focus {
        border-color: var(--aqua-blue);
    }
`;

const SearchInput = ({ value, onChange, placeholder, onFocus, onBlur }) => {
    return (
        <StyledSearch
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default SearchInput;
