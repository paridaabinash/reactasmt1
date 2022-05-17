import React, { useState} from "react";
import Functionbased from "./Functionbased";
import Classbased from "./Classbased";

import './App.css';

function App() {
  const [show, setShow] = useState({state:false});
  const [showc, setShowc] = useState({state:false});

  const functionBased = () => {
    show.state ? setShow({state:false}) : setShow({state:true})
  }

  const classBased = () => {
    showc.state ? setShowc({state:false}) : setShowc({state:true})
  }

  return (
      <div className="styling">
        <h1>Styling Using Functional and Class Component</h1>
        <button onClick={ () => functionBased() } >Div by using Functional Component</button>
        <button onClick={ () => classBased() } >Div by using Class Component</button>
        <section className="parentcomp">
          {show.state && <Functionbased /> }
          {showc.state && <Classbased />}
        </section>
      </div>
  );
}


export default App;
