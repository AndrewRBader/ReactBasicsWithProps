//import styles
import './styles/index.css'

// new function for props

function Hello(props){
  // console.log props to see
  // console.log(props);
  return(
    // where JSX goes
    <div>
      <h1>Hello I am {props.name}</h1>
      <p>I am {props.age} and I am from {props.location}</p>
    </div>
  );
}


//export the Hello function
export default Hello;