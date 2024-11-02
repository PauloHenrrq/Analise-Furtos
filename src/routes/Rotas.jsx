import { Route, Routes } from "react-router-dom";

import TheftReport from '../components/theftReport/TheftReport';
import Carrossel from '../components/carousel/Carousel';
import GraficoAIS from '../components/graficoAis/graficoAis';
import PageNotFound from '../components/pageNotFound/PageNotFound'

export default function Rotas() {

    return (
        <Routes>
            <Route element={<TheftReport />} path="/" exact />
            <Route element={<Carrossel />} path="/GraficoGerais" />
            <Route element={<GraficoAIS />} path="/GraficoAIS" />
            <Route element={<PageNotFound />} path="*" />
        </Routes>
    )
}