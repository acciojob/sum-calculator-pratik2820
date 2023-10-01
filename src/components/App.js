
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [sum,setSum]=useState(0)

  function handleChange(e){
    setSum(sum+parseInt(e.target.value))
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={handleChange} />
        <p>Sum: {sum}</p>


    </div>
  )
}

export default App
