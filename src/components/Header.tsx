import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Портфолио</h1>
            <nav>
                <a href="#top">Обо мне</a>
                <a href="#projects">Проекты</a>
                <a href="#skills">Навыки</a>
            </nav>
        </header>
    );
};

export default Header;