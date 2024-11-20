import React, { useState, useEffect } from 'react';
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

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <p>
                    {props.text2}
                </p>
            </Modal.Footer>
        </Modal>
    );
}

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(true);

        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const [modalContent, setModalContent] = useState('');
    const [modalContentFooter, setModalContentFooter] = useState('');
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div className="carousel-container">
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                text={modalContent}
                text2={modalContentFooter}
            />

            <h1>GRÁFICOS GERAIS</h1>

            {showAlert && (
                <div className="alert">
                    <div className="alert-message">Clique nos gráficos para mais informações!</div>
                    <div className="loading-bar"></div>
                </div>
            )}

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
                            <img src={GraficoCalor} alt="Gráfico de Calor com AIS e DATA"
                                onClick={() => {
                                    setModalContent(
                                        <p className='infoTitle'>
                                            <strong>AIS (Áreas Integradas de Segurança Pública)</strong>
                                            <br />As Áreas Integradas de Segurança Pública (AIS) são divisões territoriais criadas para otimizar e coordenar as atividades de segurança pública em um estado ou região. As Áreas Integradas de número 01 a 10 representam as regiões divididas na cidade de Fortaleza.
                                        </p>
                                    );
                                    setModalContentFooter(
                                        <p className='infoTitle'>
                                            <strong>Descrição</strong>
                                            <br />O gráfico no modelo de Mapa de Calor é medido por AIS e Dia da Semana no ano de 2024, onde ao lado direito é medido a quantidade de ocorrência de furto. Contendo então, AIS 01 ao Sábado, o dia onde mais ocorreu Furtos. E AIS 08 ao Domingo, possuindo o dia onde menos ocorreu Furtos.
                                        </p>
                                    );
                                    setModalShow(true);
                                }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoPizza} alt="Gráfico pizza das AIS mais perigosas (porcentagem)"
                                onClick={() => {
                                    setModalContent(
                                        <p className='infoTitle'>
                                            <strong>AIS (Áreas Integradas de Segurança Pública)</strong>
                                            <br />As Áreas Integradas de Segurança Pública (AIS) são divisões territoriais criadas para otimizar e coordenar as atividades de segurança pública em um estado ou região. As Áreas Integradas de número 01 a 10 representam as regiões divididas na cidade de Fortaleza.
                                        </p>
                                    );
                                    setModalContentFooter(
                                        <p className='infoTitle'>
                                            <strong>Descrição</strong>
                                            <br />O gráfico de pizza na imagem mostra a Distribuição de Furtos em porcentagem em cada AIS de Fortaleza no ano de 2024, onde AIS 01 se mostra com maior índice de Furtos, e AIS 08, sendo a menor.
                                        </p>
                                    );
                                    setModalShow(true);
                                }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoAIS} alt="Gráfico de Barras mostrando o número de ocorrências de cada AIS" onClick={() => {
                                setModalContent(
                                    <p className='infoTitle'>
                                        <strong>AIS (Áreas Integradas de Segurança Pública)</strong>
                                        <br />As Áreas Integradas de Segurança Pública (AIS) são divisões territoriais criadas para otimizar e coordenar as atividades de segurança pública em um estado ou região. As Áreas Integradas de número 01 a 10 representam as regiões divididas na cidade de Fortaleza.
                                    </p>
                                );
                                setModalContentFooter(
                                    <p className='infoTitle'>
                                        <strong>Descrição</strong>
                                        <br />No gráfico de barras apresentado na imagem, temos o Número de Ocorrências de Furtos em Fortaleza do ano de 2024. Onde AIS 01 se destaca com maior quantidade Furtos, e AIS 08 sendo a menor.
                                    </p>
                                );
                                setModalShow(true);
                            }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoSemana} alt="Gráfico de Ocorrências por Semana" onClick={() => {
                                setModalContentFooter(
                                    <p className='infoTitle'>
                                        <strong>Descrição</strong>
                                        <br />Dividido em Número de Ocorrências e em Dias da Semana, o gráfico apresentado possui o intuito de demonstrar as Ocorrências de Furto por Dia da Semana, em que Sexta possui maior quantidade de casos e Domingo com muito menos casos.
                                    </p>
                                );
                                setModalShow(true);
                            }} />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='galleryPrincipal'>
                        <div className='galleryExtra'>
                            <img src={GraficoData} alt="Gráfico de Ocorrências por Data" onClick={() => {
                                setModalContent(
                                    <p className='infoTitle'>
                                        <strong>Meses (Jan - Aug)</strong>
                                        <br />Os meses estão em inglês, traduzindo-se para, respectivamente:
                                        <br />Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto
                                    </p>
                                );
                                setModalContentFooter(
                                    <p className='infoTitle'>
                                        <strong>Descrição</strong>
                                        <br />Nesse gráfico de linhas, é mostrado o Número de Ocorrências (Furtos) e Data (No período de 2024) onde a linha percorre desde Janeiro até o final de Agosto, mostrando variações nos casos de Furtos. Onde é visto picos em torno de Fevereiro e Agosto.
                                    </p>
                                );
                                setModalShow(true);
                            }} />
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