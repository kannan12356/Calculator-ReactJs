import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('')

    const inputValue = (value)=>{    
        var inputs  = input;        
        setInput(inputs+=value);        
    }

    const sum = (e)=>{
        let inputs = document.getElementById("result").value

        var ans = '';        
        try{
            ans = eval(inputs);
        } catch(err)
        {   
            setInput("Math error");
        }
        if(ans === undefined){
            setInput("Math error")
        } else{
            setInput(ans);
        }
    }

    const dlt = ()=>{
        var str = document.getElementById("result").value;
        str = str.substr(0,str.length-1)
        setInput(str);
    }

    return (
        <div className="Calculator">
            <h1>Calculator</h1>
            <div className="box">
                <input type="text" className="input-box" id="result" value={input} readOnly />
                <div className="button">
                    <div className="first-row">                    
                        <button className="btn" onClick={()=>inputValue('7')}>7</button>
                        <button className="btn" onClick={()=>inputValue('8')}>8</button>                    
                        <button className="btn" onClick={()=>inputValue('9')}>9</button>
                        <button className="btn calc" onClick={()=>inputValue('/')}>/</button>
                    </div>
                    <div className="second-row">                    
                        <button className="btn" onClick={()=>inputValue('4')}>4</button>
                        <button className="btn" onClick={()=>inputValue('5')}>5</button>                    
                        <button className="btn" onClick={()=>inputValue('6')}>6</button>
                        <button className="btn calc" onClick={()=>inputValue('*')}>X</button>
                    </div>
                    <div className="third-row">                    
                        <button className="btn" onClick={()=>inputValue('1')}>1</button>
                        <button className="btn" onClick={()=>inputValue('2')}>2</button>                    
                        <button className="btn" onClick={()=>inputValue('3')}>3</button>
                        <button className="btn calc" onClick={()=>inputValue('+')}>+</button>
                    </div>
                    <div className="forth-row">                    
                        <button className="btn" onClick={()=>inputValue('0')}>0</button>
                        <button className="btn" onClick={()=>inputValue('.')}>.</button>                    
                        <button className="btn" onClick={sum}>=</button>
                        <button className="btn calc" onClick={()=>inputValue('-')}>-</button>
                    </div>
                    <div className="fifth-row">                    
                        <button className="clr" onClick={()=>setInput('')}>Clear</button>
                        <button className="clr" onClick={dlt}>Delete</button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Calculator
