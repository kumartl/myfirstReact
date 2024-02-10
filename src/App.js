// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Fifth from './Fifth';
import Sixth from './sixth';
import States from './States'
import 'bootstrap/dist/css/bootstrap.min.css';



class FirstComponent extends React.Component {
  render() {
    return(
      <><h1>FirstComponent Page</h1> 
     <h1> SurName: {this.props.surname} </h1>
      </>
    )
  }
}
class ThirdComponent extends React.Component {
  render() {
    return(
      <h1>ThirdComponent Page</h1>
    )
  }
}
function Second(props){
  return(
    <><h1>Secondfunction Page</h1>
    <h1>Name by props : {props.name}</h1>
    <h1>Age by props : {props.age}</h1>
    <ThirdComponent></ThirdComponent></>
    
  )
}


function App() {
  return (
    <div className="App">
      <button className='btn btn-danger'>test</button>
      <FirstComponent surname='santhosh'></FirstComponent>
      <Second name='rajkumar' age={50}></Second>
      <Fifth></Fifth>
      <Sixth  empskill='javadeveloper'></ Sixth>

      <States></States>
    </div>
  );
}

export default App;
