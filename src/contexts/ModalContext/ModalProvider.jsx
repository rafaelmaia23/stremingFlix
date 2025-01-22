import { useState } from "react";
import { ModalContext } from "@/contexts/ModalContext/ModalContext";

export const ModalProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalMovie, setModalMovie] = useState(null);

    const openModal = (movie) => {
        console.log("open inside modal provider");
        setModalMovie(movie);
        setIsVisible(true);
    };

    const closeModal = () => {
        console.log("close inside modal provider");
        setIsVisible(false);
        setModalMovie(null);
    };

    return (
        <ModalContext.Provider
            value={{ isVisible, openModal, closeModal, modalMovie }}
        >
            {children}
        </ModalContext.Provider>
    );
};
