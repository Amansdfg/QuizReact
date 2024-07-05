import questions from "../questions";
import {useState,useCallback} from "react";
import Summary  from "./Summary";
import Question from "./Question";
export default function Quiz(){
    const[userAnswers,setUserAnswers]=useState([]);
    
    const activeQuestionIndex=userAnswers.length;
    const isCompleted=userAnswers.length===questions.length;
    const handleSelectAnswer=useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prev=>[selectedAnswer,...prev]);
    },[]);
    
    const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);
    if(isCompleted){
        return(
            <div id="summary">
                <Summary userAnswers={userAnswers}/>
            </div>
        )
    }
    return(
        <div id="quiz">
           <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSkip={handleSkipAnswer}                        
            onSelect={handleSelectAnswer}
           /> 
        </div>
    )
}