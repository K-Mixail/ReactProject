import React, {useState} from "react";


const Question = (props) => {
    const [value, setValue] = useState(1);
	
	function changeHandler(event) {
		setValue(event.target.value);
	}
	
    return <div className="question">
        <h3 class="lead" className="question__title">{props.question.id}. {props.question.title}</h3>
        <label className="question__input">
        <input type="radio" name={props.question.id} value="1"	checked={value === '1' ? true : false} onChange={changeHandler}/>
        {props.question.answers[0]} 
        </label>
        <label className="question__input">
        <input type="radio" name={props.question.id} value="2"	checked={value === '2' ? true : false} onChange={changeHandler}/>
        {props.question.answers[1]} 
        </label>
        <label className="question__input">
        <input type="radio" name={props.question.id} value="3"	checked={value === '3' ? true : false} onChange={changeHandler}/>
        {props.question.answers[2]} 
        </label>
        <label className="question__input">
        <input type="radio" name={props.question.id} value="4"	checked={value === '4' ? true : false} onChange={changeHandler}/>
        {props.question.answers[3]} 
        </label>
    </div>
}

export default Question;