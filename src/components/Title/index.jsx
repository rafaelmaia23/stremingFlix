import styled from "styled-components";
import { breakpoints } from "@/utils/breakpoints";

const StyledTitle = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: ${({ $margin }) => $margin || 0};
        padding: ${({ $padding }) => $padding || 0};
        text-align: ${({ $align }) => $align || "center"};
        color: ${({ $color }) => $color || "var(--white)"};
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }
`;

const Title = ({ children, color, align, margin, padding }) => {
    return (
        <StyledTitle
            $color={color}
            $align={align}
            $margin={margin}
            $padding={padding}
        >
            {children}
        </StyledTitle>
    );
};

export default Title;
