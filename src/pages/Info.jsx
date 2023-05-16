import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import MyButton from "../UI/button/MyButton";

const Info = () => {
  const [value, setValue] = useState()

  async function fetchInfo() {
    if (!isNaN(value)) {
      const response = await axios.get(`http://numbersapi.com/${value}/math`)
      document.querySelector(".api__answer").textContent = response.data;
    }
    else {
      document.querySelector(".api__answer").textContent = "Ошибка! Необходимо ввести целое число";      
    }
  }

  return (<div>    
      <Header/>
      <h3 className="info__title">Введите любое чило, чтобы узнать о нём интересный факт:</h3>
      <input className="info__input"
      placeholder="Введите число"
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <MyButton onClick={fetchInfo}>Узнать</MyButton>
      <p className="api__answer"></p>
    </div>
  );
}

export default Info;