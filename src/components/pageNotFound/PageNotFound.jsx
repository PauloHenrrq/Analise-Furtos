import React from 'react';
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className='NotFoundPrincipal'>
            <h1>Página Não Encontrada!</h1>
            <a href='/'>
                <button>Voltar para Página Inicial</button>
            </a>
        </div>
    )
}