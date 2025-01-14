import styled from "styled-components";
import { useSelectedMovie } from "@/hooks/useSelectedMovie";
import { useMovies } from "@/hooks/useMovies";
import { breakpoints } from "@/utils/breakpoints";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem;
    border: 3px solid var(--cool-gray);
    border-radius: 0.25rem;
    background-color: var(--dark-gray);
    color: var(--white);
    box-sizing: border-box;
    &:focus-within {
        border-color: var(--aqua-blue);
    }

    button {
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        background-color: var(--cool-gray);
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background-color: var(--aqua-blue);
            color: var(--charcoal-gray);
        }
    }
`;

const FormDivider = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 3px solid var(--cool-gray);
    border-radius: 0.25rem;
    font-size: 1rem;
    outline: none;
    &:focus {
        border-color: var(--aqua-blue);
    }
`;

const StyledTextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    min-height: 100px;
    padding: 0.5rem;
    border: 3px solid var(--cool-gray);
    border-radius: 0.25rem;
    font-size: 1rem;
    outline: none;
    &:focus {
        border-color: var(--aqua-blue);
    }
`;

const StyledLabel = styled.label`
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    text-align: left;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const Form = ({ onSubmit, type = "add" }) => {
    const { selectedMovie, setSelectedMovie } = useSelectedMovie();
    const { editMovie, removeMovie } = useMovies();

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setSelectedMovie((prevMovie) => ({
            ...prevMovie,
            [id]: value,
        }));
    };

    const handleEditMovie = async (event) => {
        event.preventDefault();
        await editMovie(selectedMovie.id);
    };

    const handleRemoveMovie = async (event) => {
        event.preventDefault();
        await removeMovie(selectedMovie.id);
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledInput
                type="text"
                id="id"
                hidden
                readOnly={type === "add"}
                value={selectedMovie?.id || ""}
                onChange={handleOnChange}
            />
            <InputWrapper>
                <StyledLabel htmlFor="title">Título:</StyledLabel>
                <StyledInput
                    type="text"
                    id="title"
                    readOnly={type === "add"}
                    value={selectedMovie?.title || ""}
                    onChange={handleOnChange}
                />
            </InputWrapper>
            <FormDivider>
                <InputWrapper>
                    <StyledLabel htmlFor="directors">Diretores:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="directors"
                        readOnly={type === "add"}
                        value={selectedMovie?.directors || ""}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <StyledLabel htmlFor="genre_names">Generos:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="genre_names"
                        readOnly={type === "add"}
                        value={selectedMovie?.genre_names || ""}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
            </FormDivider>
            <FormDivider>
                <InputWrapper>
                    <StyledLabel htmlFor="release">Lançamento:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="release"
                        readOnly={type === "add"}
                        value={selectedMovie?.release || ""}
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <StyledLabel htmlFor="duration">Duração(min):</StyledLabel>
                    <StyledInput
                        type="text"
                        id="duration"
                        readOnly={type === "add"}
                        value={
                            selectedMovie?.duration
                                ? `${selectedMovie.duration}`
                                : ""
                        }
                        onChange={handleOnChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <StyledLabel htmlFor="score">Nota:</StyledLabel>
                    <StyledInput
                        type="text"
                        id="score"
                        readOnly={type === "add"}
                        value={
                            selectedMovie?.score ? `${selectedMovie.score}` : ""
                        }
                        onChange={handleOnChange}
                    />
                </InputWrapper>
            </FormDivider>

            <InputWrapper>
                <StyledLabel htmlFor="overview">Descrição:</StyledLabel>
                <StyledTextArea
                    type="text"
                    id="overview"
                    readOnly={type === "add"}
                    value={selectedMovie?.overview || ""}
                    onChange={handleOnChange}
                />
            </InputWrapper>

            {type === "edit" ? (
                <ButtonWrapper>
                    <button type="button" onClick={handleEditMovie}>
                        Salvar Alterações
                    </button>
                    <button type="button" onClick={handleRemoveMovie}>
                        Excluir filme
                    </button>
                </ButtonWrapper>
            ) : (
                <button type="submit">Adicionar</button>
            )}
        </StyledForm>
    );
};

export default Form;
