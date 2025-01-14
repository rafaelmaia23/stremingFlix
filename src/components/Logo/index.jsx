import { Link } from "react-router";
import LogoIcon from "./logo-play-icon.svg";
import styled from "styled-components";
import { breakpoints } from "@/utils/breakpoints";

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`;

const StyledLogoText = styled.span`
    color: var(--aqua-blue);
    font-size: 2rem;
    font-weight: bold;

    @media (min-width: ${breakpoints.mobile}) {
        font-size: 3rem;
    }
`;

const StyledLogoIcon = styled.img`
    height: 2.5rem;

    @media (min-width: ${breakpoints.mobile}) {
        height: 3.5rem;
    }
`;

const Logo = () => {
    return (
        <StyledLink to="/">
            <StyledLogoText>RafaFlix</StyledLogoText>
            <StyledLogoIcon src={LogoIcon} alt="RafaFlix logo" />
        </StyledLink>
    );
};

export default Logo;
