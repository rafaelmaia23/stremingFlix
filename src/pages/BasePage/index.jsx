import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import { Outlet } from "react-router";
import Container from "@/components/Container";
import { MoviesProvider } from "@/contexts/MoviesContext/MoviesProvider";
import { GenresProvider } from "@/contexts/GenresContext/GenresProvider";

const BasePage = () => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <GenresProvider>
                    <MoviesProvider>
                        <Container>
                            <Outlet />
                        </Container>
                    </MoviesProvider>
                </GenresProvider>
            </main>
        </>
    );
};

export default BasePage;
