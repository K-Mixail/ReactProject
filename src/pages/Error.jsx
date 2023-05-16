import React from "react";
import { Link } from 'react-router-dom';

const Error = () => {
  return (<div className="page__error">    
      <h1>Страница не найдена !</h1>
      <h2><Link to='/'>Вернуться на главную страниу</Link></h2>
    </div>
  );
}

export default Error;