// import logo from './logo.svg';
// import './App.css';
// import { Count } from './Components/ExampleUserReducer/Count';
// import { CountReducer } from './Components/ExampleUserReducer/CountReducer';
// import { GlobalStateMangement } from './Components/ExampleUserReducer/GlobalStateManUseReducer/GlobalStateMangement';
// import { ExampleUseTransition } from './Components/Hooks/ExampleUseTransition';
// import { ExampleUseDeferredValue } from './Components/Hooks/ExampleUseDeferredValue';

import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//      {/* <Count/>
//      <CountReducer/> */}
//      {/* <GlobalStateMangement/> */}
//      {/* <ExampleUseTransition/> */}
//      <ExampleUseDeferredValue/>
//     </div>
//   );
// }

// export default App;

const App=({loc})=>{
  const [input,setInput]=useState(0)
  const [count,setCount]=useState(0)
  const handleInputChange=(e)=>{
    setInput(e.target.value)
  }
  const handleDec=()=>{
    setCount(count-Number(input))
  }
  const handleInc=()=>{
    setCount(count+Number(input))
  }
  return(
  <> 
  <h1 data-testid="header">Count</h1>
  <h2 data-testid="count">{count}</h2>
  <button data-testid="dec" onClick={handleDec}>Dec</button>
  <input type="number" data-testid="input" value={input} onChange={handleInputChange}/>
  <button data-testid="inc" onClick={handleInc}>Inc</button>  
  <h1>{loc}</h1>
  </>
  )
}

export default App;
