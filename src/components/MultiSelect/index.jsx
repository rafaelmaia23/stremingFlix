import Select from "react-select";
import { useGenres } from "@/hooks/useGenres";
import { useSelectedMovie } from "@/hooks/useSelectedMovie";

const MultiSelect = () => {
    const { genres, getGenreNames } = useGenres();
    const { selectedMovie, setSelectedMovie } = useSelectedMovie();

    const genresOptions = genres.map((genre) => ({
        value: genre.id,
        label: genre.name,
    }));

    const getSelectedOptions = (genre_ids) =>
        genresOptions.filter((option) => genre_ids.includes(option.value));

    const handleOnChange = (options) => {
        const genre_ids = options.map((option) => option.value);
        const genre_names = getGenreNames(genre_ids);

        setSelectedMovie({
            ...selectedMovie,
            genre_ids: genre_ids,
            genre_names: genre_names,
        });
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#ffffff", // Cor de fundo do controle
            borderWidth: "3px", // Tamanho da borda
            borderColor: state.isFocused ? "#88DFF2" : "#D8E0F2", // Cor da borda no foco
            borderStyle: "solid", // Tipo de borda (solid, dotted, etc.)
            "&:hover": {
                borderColor: state.isFocused ? "#88DFF2" : "#D8E0F2", // Cor da borda no hover
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#88DFF2" : "#D8E0F2", // Cor de fundo das opções
            color: "#000000", // Cor do texto das opções
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#88DFF2", // Cor de fundo do balãozinho
            color: "#000000", // Cor do texto no balãozinho
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#000000", // Cor do texto no balãozinho
        }),
        placeholder: (provided) => ({
            ...provided,
            color: "#282C34", // Cor do texto do placeholder
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#D8E0F2", // Cor de fundo do menu
        }),
    };

    return (
        <>
            <Select
                isMulti
                options={genresOptions}
                value={
                    selectedMovie?.genre_ids
                        ? getSelectedOptions(selectedMovie.genre_ids)
                        : []
                }
                onChange={handleOnChange}
                placeholder="Selecione..."
                styles={customStyles}
            />
        </>
    );
};

export default MultiSelect;
