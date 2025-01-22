import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import Banner from "@/components/Banner";
import { useModal } from "@/hooks/useModal";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const StyledDialog = styled.dialog`
    position: relative;
    width: 85%;
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    background-color: white;
    align-items: center;
`;

const StyledCloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
        color: var(--aqua-blue);
        z-index: 100;
    }
`;

const Modal = () => {
    const { isVisible, modalMovie, closeModal } = useModal();

    if (!isVisible) return null;

    return (
        <Overlay onClick={closeModal}>
            <StyledDialog onClick={(e) => e.stopPropagation()}>
                <StyledCloseButton
                    onClick={() => {
                        console.log("close");
                        closeModal();
                    }}
                >
                    <IoIosCloseCircle />
                </StyledCloseButton>
                <Banner movie={modalMovie} />
            </StyledDialog>
        </Overlay>
    );
};
export default Modal;
