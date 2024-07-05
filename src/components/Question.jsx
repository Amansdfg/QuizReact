import {useState} from "react";
import QuizTimer from "./QuizTimer"
import questions  from "../questions";
import Answer from "./Answer"
export default function Question({onSkip,index,onSelect}){
    const[answer,setAnswer]=useState({
        selectedAnswer:'',
        isCorrect:null,
    });
    let timer=10000;
    if(answer.selectedAnswer){
        timer=1000
    }
    if(answer.isCorrect!==null){
        timer=2000;
    }
    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect:questions[index].answers[0]===answer
            })
            setTimeout(()=>{onSelect(answer)},2000)
        },1000)
    }
    let answerState='';
    if(answer.selectedAnswer && answer.isCorrect!==null){
        answerState=answer.isCorrect?'correct':"wrong";
    }else if(answer.selectedAnswer){
        answerState="answered";
    }

    return(
        <div id="question">
            <QuizTimer 
                key={timer}
                timeOut={timer} 
                mode={answerState}
                onTimeOut={answer.selectedAnswer===''?onSkip:null}/>
                
            <h2>{questions[index].text}</h2>
            <Answer
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
                />    
            </div>
    )
}