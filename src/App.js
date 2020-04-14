import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, minus, logged } from "./actions";
// import loggedReducer from "./reducer/isLogged";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(add())}>+</button> {""}
      <button onClick={() => dispatch(minus())}>-</button> <br></br> <br></br>
      <button onClick={() => dispatch(logged())}>
        {!isLogged ? "Sign" : "Sign Out"}
      </button>
      {isLogged ? <h3> Value be true</h3> : ""}
    </div>
  );
}

export default App;
