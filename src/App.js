//import styles
import './styles/index.css'

// new function for props

function Hello(props){
  // console.log props to see
  // console.log(props);
  const skills = props.skills.map(skill => {
    return <p>{skill}</p>
  })
  //cash conditional
  let brag
  if (props.cash>1000000){
    brag = <p>I am rich</p>
  } else {
    brag = <p>I will be rich</p>
  }

  return(
    // where JSX goes
    <div>
      <h1>Hello I am {props.name}</h1>
      <p>I am {props.age} and I am from {props.location}</p>
      {skills}
      {brag} 
      <h2>${props.cash}</h2>
    </div>
  );
}


//export the Hello function
export default Hello;