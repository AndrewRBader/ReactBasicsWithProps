// bring in React from React
import React from 'react';

// greet function
function greet(){
  return "Hello World"
}

// define hello function
const Hello = () =>{
  return (<h1>{greet()}</h1>);
}


//export the Hello function
export default Hello;