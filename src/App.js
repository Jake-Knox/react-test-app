import { useState } from 'react';
import './App.css';
import Person from './components/Person';
import Job from './components/Job';
import Garfield from './components/Garfield';


import garifledSrc from './images/garfield.png';
import airbnb from './images/airbnb.png';

function App() {

  const [persons, setPerson] = useState (
    [
      {name:"Jordan"},
      {name:"Leon"},
    ]
  );

    const [count, setCount] = useState(0);  

    const clickHandler = () => {
      // alert("click");
      setCount(count + 1); 
    }



    const bookPrices = [2.5,4.5,3.5,6.0,8.0];

    const salePrice = bookPrices.map((price) => {
      price = price * 0.5;
      return <h1>The price is: {price}</h1>
    })

  return (
    <div className="container">
      <h1 id="title">hello</h1>
       
      {salePrice}







        {/* <Person name="Jake" age="24" petName="shadow" petType="dog"/> */}

        {/* <Job role="junior developer"/> */}        
        {/* <Person name="Kramer" age="32"/>
        <Person name="Laura" age="17"/> */}
        {/* <div className="garfsContainer">
          <Garfield src={garifledSrc} description="Garf 1"/>
          <Garfield src={garifledSrc} description="Garf 2"/>
          <Garfield src={garifledSrc} description="Garf 3"/>
          <Garfield src={garifledSrc} description="Garf 4"/>
        </div> */}
           
            {/* <div>
            <img className="garf" src={garifledSrc} alt="could not load image"/>
            <p>garf 1</p>
          </div>
          <div>
            <img className="garf" src={garifledSrc} alt="could not load image"/>
            <p>garf 2</p>
          </div>
          <div>
            <img className="garf" src={garifledSrc} alt="could not load image"/>
            <p>garf 3</p>
          </div>
          <div>
            <img className="garf" src={garifledSrc} alt="could not load image"/>
            <p>garf 4</p> </div> */}

        {/* <Person name={persons[0].name} isClicked={clickHandler}/>
        <p>click count = {count}</p>

        <img src={airbnb} alt="could not load image"/> */}
      
    </div>
  );
}

export default App;
