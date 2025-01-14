import styled from "styled-components";
import { convertPxStringInNumber } from "@/utils/convertPxStringInNumber";
import imageFileIcon from "./image-file-icon.svg";

const IconWrrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: ${({ height }) => convertPxStringInNumber({ height })};
    width: ${({ width }) => width};
    background-color: var(--white);

    & > span {
        font-size: 1rem;
        color: var(--black);
        font-weight: bold;
    }
`;

const Icon = styled.img`
    width: 100%;
`;

const ImageFileIcon = ({ height, width }) => {
    return (
        <IconWrrapper height={height} width={width}>
            <Icon src={imageFileIcon} alt="image not found" />
            <span>Imagem não encontrada</span>
        </IconWrrapper>
    );
};

export default ImageFileIcon;
