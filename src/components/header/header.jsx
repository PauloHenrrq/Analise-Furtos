import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo-section">
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#grafico01">Início</a></li>
                            <li><a href="#grafico02">Relatórios</a></li>
                            <li><a href="#grafico03">Estatísticas</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}