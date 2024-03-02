import React, {useState} from "react";
import './style.css'
const Counter = () =>{
    //Khởi tạo State
    //counter/let [tên useState, set tên usestate] = useState(giá trị)
    const [counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        const newCounter = counter + 1;
        setCounter(newCounter);
    }
    const handleDecrement = () =>{
       const newCounter = counter - 1;
       setCounter(newCounter);
    }
    const handleIncrementFive = () =>{
        const newCounter = counter + 5;
        setCounter(newCounter)
    }
    const handleDecrementFive = () =>{
        const newCounter = counter - 5;
        setCounter(newCounter)
    }
    const [username, setUsername] = useState('')
    const handleChangeInputValue = event =>{
        const value = event.target.value;
        setUsername(value)
    }
    return(
        <React.Fragment>
            <div className="counter-wapper">
                <h1>Counter: {counter}</h1>
                <h2>Username: {username}</h2>
                <button className="increment" onClick={handleIncrement}>Increment(+)</button><br/>
                <button className="increment" onClick={handleDecrement}>Decrement(-)</button><br/>
                <button className="increment" onClick={handleIncrementFive}>Decrement(+ 5)</button><br/>
                <button className="increment" onClick={handleDecrementFive}>Decrement(- 5)</button><br/>
                <h1>Gía trị người cần nhập:{username}</h1>
                <input 
                    name=""
                    value={username}
                    placeholder="userName"
                    onChange={handleChangeInputValue}
                />

            </div>
        </React.Fragment>
    )
}
export default Counter;