import { Route, Routes } from "react-router-dom";

import TheftReport from '../components/theftReport/TheftReport';
import Carrossel from '../components/carousel/Carousel';
import PageNotFound from '../components/pageNotFound/PageNotFound'
import AISPage from "../components/aisPages/AisPages";

export default function Rotas() {

    return (
        <Routes>
            <Route element={<TheftReport />} path="/" exact />
            <Route element={<Carrossel />} path="/GraficoGerais" />
            <Route element={<AISPage />} path="/ais/:number" />
            <Route element={<PageNotFound />} path="*" />
        </Routes>
    )
}