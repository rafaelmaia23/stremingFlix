import { BrowserRouter, Route, Routes } from "react-router"

const AppRoutes() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}