import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AisPages.css';

import PageNotFound from '../pageNotFound/PageNotFound';

import setaVoltar from '../../assets/setaVoltar.png'
import setaVoltarModal from '../../assets/setaVoltarModal.png'
import setaAvancarModal from '../../assets/setaAvançarModal.png'
import g1AIS1 from '../../assets/Graficos/Graficos AIS/AIS 01/grafico1.png'
import g2AIS1 from '../../assets/Graficos/Graficos AIS/AIS 01/grafico2.png'
import g1AIS2 from '../../assets/Graficos/Graficos AIS/AIS 02/grafico1.png'
import g2AIS2 from '../../assets/Graficos/Graficos AIS/AIS 02/grafico2.png'
import g1AIS3 from '../../assets/Graficos/Graficos AIS/AIS 03/grafico1.png'
import g2AIS3 from '../../assets/Graficos/Graficos AIS/AIS 03/grafico2.png'
import g1AIS4 from '../../assets/Graficos/Graficos AIS/AIS 04/grafico1.png'
import g2AIS4 from '../../assets/Graficos/Graficos AIS/AIS 04/grafico2.png'
import g1AIS5 from '../../assets/Graficos/Graficos AIS/AIS 05/grafico1.png'
import g2AIS5 from '../../assets/Graficos/Graficos AIS/AIS 05/grafico2.png'
import g1AIS6 from '../../assets/Graficos/Graficos AIS/AIS 06/grafico1.png'
import g2AIS6 from '../../assets/Graficos/Graficos AIS/AIS 06/grafico2.png'
import g1AIS7 from '../../assets/Graficos/Graficos AIS/AIS 07/grafico1.png'
import g2AIS7 from '../../assets/Graficos/Graficos AIS/AIS 07/grafico2.png'
import g1AIS8 from '../../assets/Graficos/Graficos AIS/AIS 08/grafico1.png'
import g2AIS8 from '../../assets/Graficos/Graficos AIS/AIS 08/grafico2.png'
import g1AIS9 from '../../assets/Graficos/Graficos AIS/AIS 09/grafico1.png'
import g2AIS9 from '../../assets/Graficos/Graficos AIS/AIS 09/grafico2.png'
import g1AIS10 from '../../assets/Graficos/Graficos AIS/AIS 10/grafico1.png'
import g2AIS10 from '../../assets/Graficos/Graficos AIS/AIS 10/grafico2.png'

export default function AISPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveIndex(0)
    };

    const handleCardClick = (img) => {
        setActiveIndex(img);
    };

    const nextImage = () => {
        if (activeIndex < currentData.imgs.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const prevImage = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const closeImage = () => {
        setActiveIndex(-1);
    };

    const { number } = useParams();

    const aisData = {
        '01': {
            imgs: [g1AIS1, g2AIS1],
            maps: 'https://www.google.com/maps/d/embed?mid=18oV5NLjqxHMuPC50LH51fMqZWN0JdpAC&ehbc=2E312F'
        },
        '02': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS2, g2AIS2],
            maps: 'https://www.google.com/maps/d/embed?mid=1rwCLuwI33951Xc-eNR1Oe3m-rvvHdctH&ehbc=2E312F'
        },
        '03': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS3, g2AIS3],
            maps: 'https://www.google.com/maps/d/embed?mid=1S-9eZ1SLPZRtM75UrMEzSdxFWOFZllqA&ehbc=2E312F'
        },
        '04': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS4, g2AIS4],
            maps: 'https://www.google.com/maps/d/embed?mid=1rOpNrlMlnrOtLGXpWkmYQZOcGW7B7scX&ehbc=2E312F'
        },
        '05': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS5, g2AIS5],
            maps: 'https://www.google.com/maps/d/embed?mid=1s86-6uxgbZLBQzHZaIjcdGHSBCzWodX2&ehbc=2E312F'
        },
        '06': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS6, g2AIS6],
            maps: 'https://www.google.com/maps/d/embed?mid=1KRD5K7AnEb1bTUZNxsyx5iOxN4jDmnY6&ehbc=2E312F'
        },
        '07': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS7, g2AIS7],
            maps: 'https://www.google.com/maps/d/embed?mid=1QZ1_EVK9EvrwHvvPDcZkNdvUCT5D7ZKw&ehbc=2E312F'
        },
        '08': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS8, g2AIS8],
            maps: 'https://www.google.com/maps/d/embed?mid=1tDRqyoKNAgRMo_YRK2c--06UG8h4y2DL&ehbc=2E312F'
        },
        '09': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS9, g2AIS9],
            maps: 'https://www.google.com/maps/d/embed?mid=18oV5NLjqxHMuPC50LH51fMqZWN0JdpAC&ehbc=2E312F'
        },
        '10': {
            content: 'Conteúdo para AIS 01',
            imgs: [g1AIS10, g2AIS10],
            maps: 'https://www.google.com/maps/d/embed?mid=1-GFZTFAWk50dLi1o-jDekduxsVJ--CUb&ehbc=2E312F'
        },
    };

    if (!aisData[number]) {
        return <PageNotFound />;
    }

    const currentData = aisData[number];
    const currentNumber = parseInt(number)

    return (
        <div className='pageMain'>
            <div className="pageTitle">

                <button className="pageBack">
                    <img src={setaVoltar} alt="Botão para voltar de página" className='setaVoltar' />
                    <Link to='/GraficoAIS' className='pageLink'><h3 className='voltar'>Voltar</h3></Link>
                </button>
                <h1>
                    AIS {number}
                </h1>
            </div>
            <div className="cardsMain">
                <div className="cardsPrimary">
                    {currentData.imgs.map((img, index) => (
                        <div className={`cardsPage`}
                            key={index}
                            style={{
                                backgroundImage: `url(${img})`,
                                rotate: index === 0 ? '-11deg' : '11deg'
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className='cardsPageTitle'>
                                <h1>Gráfico {index + 1}</h1>
                            </div>
                            <div className='cardsPageSubTitle'>
                                <h2>Ver mais</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mapMain">
                <iframe src={currentData.maps} title="Mapa"></iframe>
            </div>

            <div className="divBackNext" style={{
                display: 'flex',
                justifyContent: number === '01' ? 'end' : ''
            }}>
                <Link to={`/ais/${(currentNumber - 1).toString().padStart(2, '0')}`} className='pageLink'><button className="buttonBack" style={{ display: number === '01' ? 'none' : '' }} onClick={() => scrollToTop()}>
                    <img src={setaVoltar} alt="Botão para voltar de página" className='setaVoltar' />
                    <h3 className='voltar' >Voltar AIS</h3>
                </button></Link>
                <Link to={`/ais/${(currentNumber + 1).toString().padStart(2, '0')}`} className='pageLink'><button className="buttonNext" style={{ display: number === '10' ? 'none' : '' }} onClick={() => scrollToTop()}>
                    <h3 className='avancar'>Avançar AIS</h3>
                    <img src={setaAvancarModal} alt="Botão para voltar de página" className='setaVoltar' />
                </button></Link>
            </div>


            {currentData.imgs.length > 0 && activeIndex >= 0 && (
                <div className="overlay" onClick={closeImage}>
                    <div className="overlayContent" onClick={(e) => e.stopPropagation()}>
                        <img src={setaVoltarModal} alt="Seta de Regredir" className={`expandedArrow`} onClick={prevImage}
                            style={{
                                display: activeIndex === 0 ? 'none' : '',
                                left: activeIndex === 1 ? '38px' : ''
                            }} />

                        <img src={currentData.imgs[activeIndex]} alt="Gráfico expandido" className="expandedImage"
                            style={{
                                position: 'relative',
                                left: activeIndex === 1 ? '40px' : '80px',
                            }} />

                        <img src={setaAvancarModal} alt="Seta de Avançar" className={`expandedArrow`} onClick={nextImage}
                            style={{
                                display: activeIndex === 1 ? 'none' : '',
                                left: activeIndex === 0 ? '80px' : ''
                            }} />
                    </div>
                </div>
            )}
        </div >
    );
}