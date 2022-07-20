//How to use state inside a functional component
/*If we have to access a state of lifecycle component 
inside a functional component, but don't want or need to 
refactor it into a class component, we can use the 
feature "Hooks" which allows us to use State and other 
features without having to write a class
 */

/*State Hook allows us to use State inside of a functional
component */

import React, { useState, useEffect } from "react";

export default function App() {
    const [isOn, setIsOn] = useState(false) /*pass in dafault parameter;
     isOn is set to false; when we call setIsOn, we can pass in
     a new value;*/
    /*destructuring; first item is 
    name of state variable, a boolean value, second item 
    is the name of the modifier for the variable - the 
    state property - name of the method that will update 
    the state property; takes a parameter and updates 
    whatever value IsOn is pointing to based on what is 
    passed into the method*/
    const [clickCount, setClickCount] = useState(0); /*keep 
    count of how many times switch has been clicked; useState 
    default value is 0 */
  
    useEffect(() => {
      document.title = isOn ? "ON" : "OFF";
      /*set to on or off depending on true 
      or false; will change title f document for every 
      render; if we have a functional component
      that needs to send a request or asynchronous
      input/output, this is the place, and it 
      will fire anytime it's rendered */
    }) /*a function that takes another function 
    as an argument; callback that will be called anytime 
    this functional component renders; anytime i-herokuapp.comt renders we 
    want to do something; change title of browser tab */

    return(
    <div>
      <p>{isOn ? 'Yes, it is on!' : 'OFF'}</p>
      <p>Times Clicked: {clickCount}</p>
      <button onClick={() => {
          setIsOn(!isOn);
          setClickCount(clickCount + 1);
        } /*passing whatever previous clickCount was + 1 */ 
        }>Switch</button>
     </div>
    ); /*button is set to on and switch back and forth 
    with each click */
}

/*Effect Hook: used to create side effect causing actions
inside a functional component; call useEffect function, and
pass in any function we want to be called as an argument;
passed in function is executed after every render of the
component including the very first rendering;  */

/*Asynchronous code: is JS when we write this code, we have to 
use callbacks or promises; but with Asynch and Await, we 
can handle asynchronous calls and wait for them to resolve
any await call has to be inside an async function */

const HOUSES_ENDPOINT = "https://ancient-taiga-31359-herokuapp.com/api/houses";

const getHouses = () => { /*performas a fetch request on the house,
endpoint, then calls .then on the promise, which returns another
.then promise taht we log to the console  */
  fetch(HOUSES_ENDPOINT)
  .then(resp => resp.json())
  .then(resp => console.log(resp));
}

getHouses(); /*this first function has a promise */


/*to use await keyword, we need an async function; we add async
keyword before our function */

const getHouses = async () => { /* */
  const resp = await fetch(HOUSES_ENDPOINT);/*await keyword
  waits for the response to come back before moving onto
  the next line; only use await keyword inside funcitons that 
  have async keyword; */
  /*If we want body from the response, we call json method*/
  const json = await resp.json ();
  console.log(json);
}

getHouses(); 