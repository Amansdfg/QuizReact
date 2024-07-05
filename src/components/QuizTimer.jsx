import {useState,useEffect} from "react";
export default function QuizTimer({timeOut,onTimeOut,mode}){
    const[remainingTimer,setRemainingTimer]=useState(timeOut);
    useEffect(()=>{
        console.log("Set timeout");
        const timer=setTimeout(onTimeOut,timeOut);
        return ()=> clearTimeout(timer);
    },[onTimeOut,timeOut])
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("Set interval");
            setRemainingTimer(prev=>prev-100)
        },100)
        return ()=> clearInterval(interval);
    },[]);
    return(
        <progress 
            value={remainingTimer} 
            max={timeOut}
            className={mode}
            />
    )
}