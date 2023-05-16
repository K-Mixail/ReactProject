import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h2><Link to='/'>Главная</Link></h2>
            <h2><Link to='/test'>Тест</Link></h2>
            <h2><Link to='/info'>Факты о числах</Link></h2>
        </div>
    )
}

export default Header;