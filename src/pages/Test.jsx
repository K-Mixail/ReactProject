import React, { useState } from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import MyButton from "../UI/button/MyButton";


function Test() {

  const questions = [
    {
      id: 1,
      title: 'Сколько основных планет находится в Солнечной системе?',
      answers: [
      "7",  
      "8",
      "9",
      "10",
      ],
    },
    {      
      id: 2,
      title: 'Чем является Луна?',
      answers: [
      "звездой",
      "спутником",
      "планетой",
      "каметой",
      ],
    },
    {      
      id: 3,
      title: 'Солнце - это ',
      answers: [
      "звезда",
      "спутник",
      "астероид",
      "камета",
      ]
    }
  ]

  // let rightAnswers = [1,2,3]; 

  // async function checkAnswer() {
  //   let i=0;
  //   let s=0;
  //   let inputs = document.querySelector(".question input")
  //   for (let input of inputs) {
  //     if (input.value === rightAnswers[i]) {
  //       s=s+1;
  //     }
  //     else {s=s+0;}
  //     i++;
  //   }
  //   document.querySelector(".show__answer").textContent `'это {s}`
  // }
  
  // const CheckAnswer = () => {
  //   if (<Question value /> === 1) {
  //     document.querySelector(".show__answer").textContent = `Да`;
  //   } else {
  //     document.querySelector(".show__answer").textContent = `Нет`;
  //   } 
  // }

  return (
    <div className="App">
      <Header/>
      {questions.map(question =>
        <Question question={question} key={question.id} />
      )}
      { <MyButton /*onClick={CheckAnswer}*/ style={{marginLeft: '30%'}}>Узнать результат</MyButton>  }
      <p className="show__answer"></p> 
    </div>
  );
}

export default Test;
