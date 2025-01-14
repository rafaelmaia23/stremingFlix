import styled from "styled-components";
import { breakpoints } from "@/utils/breakpoints";

const StyledContainer = styled.div`
    margin: 1rem;
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
        margin: 1.5rem auto;
        max-width: ${breakpoints.tablet};
    }

    @media (min-width: ${breakpoints.laptop}) {
        margin: 2rem auto;
        max-width: ${breakpoints.laptop};
    }

    @media (min-width: ${breakpoints.desktop}) {
        margin: 2.5rem auto;
        max-width: ${breakpoints.desktop};
    }

    @media (min-width: ${breakpoints.largeDesktop}) {
        margin: 3rem auto;
        max-width: ${breakpoints.largeDesktop};
    }

    @media (min-width: ${breakpoints.fullHD}) {
    }
`;

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
