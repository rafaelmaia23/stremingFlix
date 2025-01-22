import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import { Outlet } from "react-router";
import Container from "@/components/Container";
import { MoviesProvider } from "@/contexts/MoviesContext/MoviesProvider";
import { GenresProvider } from "@/contexts/GenresContext/GenresProvider";
import { ModalProvider } from "@/contexts/ModalContext/ModalProvider";

const BasePage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <GenresProvider>
                    <MoviesProvider>
                        <ModalProvider>
                            <Container>
                                <Outlet />
                            </Container>
                        </ModalProvider>
                    </MoviesProvider>
                </GenresProvider>
            </main>
        </>
    );
};

export default BasePage;
