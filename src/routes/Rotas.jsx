import { Route, Routes } from "react-router-dom";

import TheftReport from '../components/theftReport/TheftReport';
import Carrossel from '../components/carousel/Carousel';
import GraficoAIS from '../components/GraficoAIS/GraficoAIS';
import PageNotFound from '../components/pageNotFound/PageNotFound'
import AISPage from "../components/aisPages/AisPages";

export default function Rotas() {

    return (
        <Routes>
            <Route element={<TheftReport />} path="/" exact />
            <Route element={<Carrossel />} path="/GraficoGerais" />
            <Route element={<GraficoAIS />} path="/GraficoAIS" />
            <Route element={<AISPage />} path="/ais/:number" />
            <Route element={<PageNotFound />} path="*" />
        </Routes>
    )
}