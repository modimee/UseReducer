import React, { useReducer, useState } from "react";


const initialState = 0;
const reducer = (state,action) =>{
  console.log (state,action);
  if(action.type ==="Increment"){
return state + 1;
}
  if(action.type ==="Decrement")
  {
    return state - 1;
  }
  return state;
}

function App() {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer (reducer,initialState);

  return (
    <>
      <div className="text-center h-64 bg-gradient-to-r from-purple-500 to-pink-500">
       
          <h1>{state}</h1>
          <button
            className="bg-blue-400 w-32 h-12 border-2"
            onClick={() => dispatch({type:"Increment"})}
          >
            Inc +
          </button>
          <br />
          <br />
          <button
            className="bg-orange-400 w-32 h-12 border-2"
            onClick={() => dispatch({type:"Decrement"})}
          >
            Dec -
          </button>
      </div>
    </>
  );
}

export default App;
