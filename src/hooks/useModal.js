import { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

export const useModal = () => {
    const { isVisible, openModal, closeModal, modalMovie } =
        useContext(ModalContext);

    return {
        isVisible,
        openModal,
        closeModal,
        modalMovie,
    };
};
