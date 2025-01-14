import { useState } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";
import menuIcon from "./menu.svg";
import menuIconPink from "./menu-pink.svg";
import { breakpoints } from "@/utils/breakpoints";

// MenuMobile - mobile
const StyleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0;
    border: none;
    background-color: transparent;

    img {
        width: 3rem;
    }

    @media (min-width: 1024px) {
        display: none; /* Ocultar o menu mobile em telas maiores */
    }
`;

const StyledListMobile = styled.ul`
    background-color: var(--medium-purple);
    width: 100%;
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: 5rem;
    list-style: none;

    @media (min-width: ${breakpoints.mobile}) {
        top: 6rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
        display: none; /* Ocultar o menu mobile em telas maiores */
    }
`;

const StyledListItem = styled.li`
    /* background-color: var(--charcoal-gray); */
    width: 100%;
    padding: 0;

    &:hover {
        background-color: var(--aqua-blue);
        a {
            color: var(--light-purple);
        }
    }
    @media (min-width: ${breakpoints.laptop}) {
        background-color: transparent; /* Remover o fundo no desktop */

        &:hover {
            background-color: transparent;
            a {
                color: var(--cool-gray);
            }
        }
    }
`;

const StyledNavLink = styled(NavLink)`
    display: block;
    width: 100%;
    padding: 1rem 0;
    color: var(--cool-gray);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;

    &.active {
        color: var(--aqua-blue);
    }

    @media (min-width: ${breakpoints.laptop}) {
        color: var(--medium-purple);
    }
`;

// MenuDesktop - desktop
const StyledListDesktop = styled.ul`
    display: none;
    list-style: none;

    @media (min-width: ${breakpoints.laptop}) {
        display: flex;
        gap: 2rem;
    }
`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav>
            {/* Menu Mobile */}
            <StyleButton
                onClick={toggleMenu}
                className={isMenuOpen ? "menu-open" : ""}
            >
                <img
                    src={isMenuOpen ? menuIconPink : menuIcon}
                    alt="Menu icon"
                />
            </StyleButton>

            <StyledListMobile $isMenuOpen={isMenuOpen}>
                <StyledListItem>
                    <StyledNavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Início
                    </StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink
                        to="/add-movie"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Cadastrar
                    </StyledNavLink>
                </StyledListItem>
            </StyledListMobile>

            {/* Menu Desktop */}
            <StyledListDesktop>
                <StyledListItem>
                    <StyledNavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Início
                    </StyledNavLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledNavLink
                        to="/add-movie"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Cadastrar
                    </StyledNavLink>
                </StyledListItem>
            </StyledListDesktop>
        </nav>
    );
};

export default Navbar;
