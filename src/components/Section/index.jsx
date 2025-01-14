import styled from "styled-components";

const StyledSection = styled.section`
    margin: 1.5rem 0;
`;

const Section = ({ children }) => {
    return <StyledSection>{children}</StyledSection>;
};

export default Section;
