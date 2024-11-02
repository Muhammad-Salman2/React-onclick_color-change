import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "./style.css";
function App() {
  const [color, setcolor] = useState()
  return (
    <>
      <div className="main-container" style={{backgroundColor : color}}>
      </div>
          <div className="buttonsDiv">
              <button onClick={()=>{setcolor("red")}} className="redbtn">red</button>
              <button onClick={()=>{setcolor("blue")}} className="bluebtn">blue</button>
              <button onClick={()=>{setcolor("green")}} className="greenbtn">green</button>
              <button onClick={()=>{setcolor("yellow")}} className="yellowbtn">yellow</button>
              <button onClick={()=>{setcolor("purple")}} className="purplebtn">purple</button>
              <button onClick={()=>{setcolor("black")}} className="blackbtn">black</button>
              <button onClick={()=>{setcolor("white")}} className="whitebtn">white</button>
          </div>
    </>
  );
  };

  

export default App;
