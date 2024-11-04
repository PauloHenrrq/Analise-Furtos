import React from 'react';
import { Link } from 'react-router-dom';
import './graficoAis.css';

import ais_01 from '../../assets/ais/ais_01.png'
import ais_02 from '../../assets/ais/ais_02.png'
import ais_03 from '../../assets/ais/ais_03.png'
import ais_04 from '../../assets/ais/ais_04.png'
import ais_05 from '../../assets/ais/ais_05.png'
import ais_06 from '../../assets/ais/ais_06.png'
import ais_07 from '../../assets/ais/ais_07.png'
import ais_08 from '../../assets/ais/ais_08.png'
import ais_09 from '../../assets/ais/ais_09.png'
import ais_10 from '../../assets/ais/ais_10.png'

const GraficoAIS = () => {

  const imageUrls = [
    { card: ais_01, title: '01', link: '/ais/01' },
    { card: ais_02, title: '02', link: '/ais/02' },
    { card: ais_03, title: '03', link: '/ais/03' },
    { card: ais_04, title: '04', link: '/ais/04' },
    { card: ais_05, title: '05', link: '/ais/05' },
    { card: ais_06, title: '06', link: '/ais/06' },
    { card: ais_07, title: '07', link: '/ais/07' },
    { card: ais_08, title: '08', link: '/ais/08' },
    { card: ais_09, title: '09', link: '/ais/09' },
    { card: ais_10, title: '10', link: '/ais/10' }
  ]

  return (
    <div className='graphicMain'>
      <h1>Gráficos AIS</h1>
      <div className="graphicCard">
        {imageUrls.map((url, index) => (
          <Link to={url.link} key={index} className="cardsLink">
            <div className="cards"
              style={{
                backgroundImage: `url(${url.card})`
              }}
            >
              <div className='cardsTitle'>
                <h1>AIS {url.title}</h1>
              </div>
              <div className='cardsSubTitle'>
                <h2>Ver mais</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GraficoAIS;