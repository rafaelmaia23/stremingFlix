import { BrowserRouter, Route, Routes } from "react-router";
import BasePage from "@/pages/BasePage";
import HomePage from "@/pages/HomePage";
import MoviePage from "@/pages/MoviePage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="add-movie"
                        element={<MoviePage type="add" />}
                    />
                    <Route
                        path="edit-movie/:id"
                        element={<MoviePage type="edit" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
