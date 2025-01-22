import styled from "styled-components";
import Title from "@/components/Title";
import { breakpoints } from "@/utils/breakpoints";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const StyledBannerContainer = styled.div`
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ $background }) => `url(${$background})`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.4);

    /* Escurecendo a imagem de fundo */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        z-index: 1;
    }

    & > * {
        z-index: 2;
    }
`;

const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 320px;
`;

const StyledCard = styled.div`
    width: 100%;
    height: 230px;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
    box-sizing: border-box;

    @media (min-width: ${breakpoints.tablet}) {
        max-width: 600px;
    }
`;

const StyledImage = styled.img`
    height: 230px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCardInfo = styled.p`
    font-size: 0.8rem;
    color: var(--black);
    margin: 0 0 0.5rem 0;
    text-align: left;
    margin: 0;
    height: 100%;
`;

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: var(--black);
    border: 2px solid var(--white);
    color: var(--white);
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: var(--white);
        border: 2px solid var(--black);
        color: var(--black);
    }
`;

const Banner = ({ title, movie, addButton = false }) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(
        window.innerWidth >= breakpoints.tablet
    );

    useEffect(() => {
        const handleResize = () => {
            const isTabletOrLarger =
                window.innerWidth >= parseInt(breakpoints.tablet, 10);
            setIsVisible(isTabletOrLarger);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleOnCLick = (event) => {
        event.preventDefault();
        navigate(`/add-movie/${movie.id}`);
    };

    return movie ? (
        <StyledBannerContainer
            $background={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        >
            {title && (
                <Title color="var(--white)" align="left">
                    <h2>{title}</h2>
                </Title>
            )}

            <StyledInfoContainer>
                <StyledCard>
                    <Title color="var(--black)" align="left">
                        <h3>{movie.title}</h3>
                    </Title>
                    <StyledCardInfo>
                        Diretor(es): {movie.directors}
                    </StyledCardInfo>
                    <StyledCardInfo>Lançamento: {movie.release}</StyledCardInfo>
                    <StyledCardInfo>
                        Duração: {movie.duration} minutos
                    </StyledCardInfo>
                    <StyledCardInfo>Nota: {movie.score}/10</StyledCardInfo>
                    {isVisible && (
                        <StyledCardInfo>{movie.overview}</StyledCardInfo>
                    )}
                </StyledCard>
                <StyledImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </StyledInfoContainer>
            {addButton && (
                <StyledButton onClick={handleOnCLick}>
                    Adicionar aos seus filmes
                </StyledButton>
            )}
        </StyledBannerContainer>
    ) : (
        <Title align="center" color="var(--white)">
            <h3>Carregando Banner com sugestão de filme...</h3>
        </Title>
    );
};

export default Banner;
