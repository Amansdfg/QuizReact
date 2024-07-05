import completedImg from "../assets/quiz-complete.png";
import questions from "../questions";
export default function Summary({userAnswers}){
    const skippedAnswers=userAnswers.filter(answer=>answer===null);
    const correctAnswers=userAnswers.filter((answer,index)=>answer===questions[index].answers[0]);
    const skippedShare=Math.round((skippedAnswers.length/userAnswers.length)*100);
    const correctShare=Math.round((correctAnswers.length/userAnswers.length)*100);
    const wrongShare=100-skippedShare-correctShare;
    return(
        <div id="summary">
            <img src={completedImg} alt="logo"/>  
            <h2>quiz completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">skipped</span> 
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">answered correctly</span> 
                </p>
                <p>
                    <span className="number">{wrongShare}%</span>
                    <span className="text">answered incorrectly</span> 
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index)=>{
                let cssClass="user-answer";
                if(answer===null){
                    cssClass+=' skipped';
                }else if(answer===questions[index].answers[0]){
                    cssClass+=' correct';
                }else{
                    cssClass+=" wrong";
                }
                return(<li key={index}>
                    <h3>{index+1}</h3>
                    <p className="question">{questions[index].text}</p>
                    <p className={cssClass}>{answer??"Skipped"}</p>
                </li>)
                })}
            </ol>
        </div>
    )
}