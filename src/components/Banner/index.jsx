import styled from "styled-components";
import Title from "@/components/Title";
import { breakpoints } from "@/utils/breakpoints";
import { useEffect, useState } from "react";

const StyledBannerContainer = styled.div`
    width: 100%;
    height: 347px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ $background }) => `url(${$background})`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
        z-index: 1;
    }

    & > * {
        z-index: 2;
    }

    @media (min-width: ${breakpoints.laptop}) {
        justify-content: center;
    }
`;

const StyledInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

const StyledImage = styled.img`
    width: 160px;
    height: 240px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCard = styled.div`
    width: 160px;
    height: 240px;
    max-height: 240px;
    max-width: 300px;
    flex: 1;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    box-sizing: border-box;

    @media (min-width: ${breakpoints.tablet}) {
        max-width: 600px;
    }
`;

const StyledCardInfo = styled.p`
    font-size: 0.8rem;
    color: var(--black);
    margin: 0 0 0.5rem 0;
    text-align: left;
    margin: 0;
`;

const Banner = ({ img, title }) => {
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

    return (
        <section>
            <StyledBannerContainer $background={img}>
                <Title color="var(--white)" align="left">
                    <h2>Recomendação da semana:</h2>
                </Title>
                <StyledInfoContainer>
                    <StyledCard>
                        <Title color="var(--black)" align="left">
                            <h3>Star Wars: Rogue One</h3>
                        </Title>
                        <StyledCardInfo>
                            Diretor: Nome do diretor
                        </StyledCardInfo>
                        <StyledCardInfo>Lançamento: 12/06/1879</StyledCardInfo>
                        <StyledCardInfo>Duração: 200 minutos</StyledCardInfo>
                        <StyledCardInfo>Nota: 8.5/10</StyledCardInfo>
                        {isVisible && (
                            <StyledCardInfo>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Maiores, porro! Enim ipsa
                                dolorem quas! Consequatur, odit rerum voluptas
                                vero fuga esse minus velit ipsum perspiciatis
                                culpa cupiditate repellat iusto maiores?
                            </StyledCardInfo>
                        )}
                    </StyledCard>
                    <StyledImage src={img} alt={title} />
                </StyledInfoContainer>
            </StyledBannerContainer>
        </section>
    );
};

export default Banner;
