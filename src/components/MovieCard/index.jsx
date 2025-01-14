import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { truncateText } from "@/utils/truncateText";
import ImageFileIcon from "@/components/MovieCard/ImageFileIcon";
import { convertPxStringInNumber } from "@/utils/convertPxStringInNumber";
import { Link } from "react-router";

const Wrapper = styled.div`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-shrink: 0;
    margin-top: 0.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const StyledContainer = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    width: 100%;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover .overlay,
    &:focus-within .overlay {
        opacity: 1;
        visibility: visible;
    }
`;

const EditButton = styled.button`
    position: absolute;
    top: -10px;
    right: -10px;
    color: var(--white);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--aqua-blue);
    }

    & > a {
        color: var(--white);
        text-decoration: none;
    }
`;

const StyledFigure = styled.figure`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
`;

const StyledImage = styled.img`
    width: 100%;
    height: ${({ height }) => convertPxStringInNumber({ height })};
    object-fit: cover;
    border-radius: 8px;
`;

const MovieTitle = styled.h3`
    font-size: 1rem;
    text-align: center;
    margin: 0.2rem 0;
    color: ${({ color }) => color};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: rgb(22, 22, 22);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    text-align: left;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
`;

const OverlayMovieTitle = styled.h3`
    font-size: 0.9rem;
    text-align: left;
    margin: 0;
    color: ${({ color }) => color};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    position: relative;
`;

const OverlayInfo = styled.p`
    margin: 0;
    font-size: 0.8rem;
    font-weight: 700;
`;

const OverlayMovieDescription = styled.p`
    font-size: 0.7rem;
    text-align: left;
    margin: 0;
`;

const MovieCard = ({
    movie,
    overlay = true,
    width = "200px",
    height = "340px",
    titleLength = 45,
    simbol = false,
    titleColor = "var(--white)",
}) => {
    const truncatedTitle = truncateText(movie.title, titleLength);
    const truncatedDescription = truncateText(movie.overview, 290);
    return (
        <Wrapper width={width} height={height}>
            <StyledContainer tabIndex="0">
                <StyledFigure>
                    {movie.poster_path === null ? (
                        <ImageFileIcon height={height} width={width} />
                    ) : (
                        <StyledImage
                            height={height}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`${movie.title} poster`}
                        />
                    )}
                    <figcaption>
                        <MovieTitle color={titleColor} align="center">
                            {truncatedTitle}
                        </MovieTitle>
                    </figcaption>
                </StyledFigure>
                {overlay && (
                    <Overlay className="overlay">
                        <OverlayMovieTitle>{movie.title}</OverlayMovieTitle>
                        <OverlayInfo>Diretor: {movie.directors}</OverlayInfo>
                        <OverlayInfo>Duração: {movie.duration} min</OverlayInfo>
                        <OverlayInfo>Ano: {movie.release}</OverlayInfo>
                        <OverlayInfo>Nota: {movie.score}</OverlayInfo>
                        <OverlayMovieDescription>
                            {truncatedDescription}
                        </OverlayMovieDescription>
                    </Overlay>
                )}
            </StyledContainer>
            {simbol && (
                <EditButton>
                    <Link to={`edit-movie/${movie.id}`}>
                        <FaEdit />
                    </Link>
                </EditButton>
            )}
        </Wrapper>
    );
};

export default MovieCard;
