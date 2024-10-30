import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

import SetaDireita from '../../assets/SetaDireita.png';
import SetaEsquerda from '../../assets/SetaEsquerda.png';

import GraficoCalor from '../../assets/Graficos/Graficos Globais/MapaDeCalor.png';
import GraficoPizza from '../../assets/Graficos/Graficos Globais/GraficoPizza.png';
import GraficoAIS from '../../assets/Graficos/Graficos Globais/OcorrenciaAIS.png';
import GraficoSemana from '../../assets/Graficos/Graficos Globais/OcorrenciaSemana.png';
import GraficoData from '../../assets/Graficos/Graficos Globais/OcorrenciaData.png';

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="carousel-container">
            <h1>RELATÓRIOS GERAIS</h1>
            <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                indicators={false}
                nextIcon={<img src={SetaDireita} aria-hidden="true" className="custom-next-icon" />}
                prevIcon={<img src={SetaEsquerda} aria-hidden="true" className="custom-prev-icon" />}
            >
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoCalor} alt="Gráfico de Calor com AIS e DATA" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoPizza} alt="Gráfico pizza das AIS mais perigosas (porcentagem)" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoAIS} alt="Gráfico de Barras mostrando o número de ocorrências de cada AIS" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoSemana} alt="Gráfico de Ocorrências por Semana" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoData} alt="Gráfico de Ocorrências por Data" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="carousel-indicators">
                {[0, 1, 2, 3, 4].map(index => (
                    <button
                        key={index}
                        className={`indicator-btn ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleSelect(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
