import styled from "styled-components";
import Navbar from "@/components/Header/Navbar";
import search from "./search.svg";
import Logo from "@/components/Logo";
import { breakpoints } from "@/utils/breakpoints";

const StyledHeader = styled.header`
    height: 3rem;
    background-color: var(--black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @media (min-width: ${breakpoints.mobile}) {
        height: 4rem;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    background: none;
    img {
        width: 2.5rem;
    }

    @media (min-width: ${breakpoints.mobile}) {
        img {
            width: 3.5rem;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <IconsContainer>
                <StyledButton>
                    <img src={search} alt="search icon" />
                </StyledButton>
                <Navbar />
            </IconsContainer>
        </StyledHeader>
    );
};

export default Header;
