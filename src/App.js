import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {

  let dispatch =useDispatch();
  let inputRef= useRef();
  let storeObject=useSelector((storeObject)=>{
    console.log(storeObject);
    return storeObject;
  });

let addPolitician =() =>{
  return ()=>{
    dispatch ({type: "addPolitician", data: inputRef.current.value})
  }
}



  return (
    <div className="App">
      <h1>Combine Reducer, Redux Thunk</h1>
      <br></br>

      <input ref={inputRef}></input>

      <button onClick={()=>{
        dispatch({type:"addActor", data:inputRef.current.value})
       }}>Add Actor</button>


      <button onClick={()=>{
        dispatch({type:"addCricketer", data:inputRef.current.value})
        }}>Add Cricketer</button>


      <button onClick={()=>{
        dispatch({type:"addPolitician", data:inputRef.current.value})
      }}>Add Politician</button>

      <button onClick={()=>{
        dispatch(addPolitician())
      }}>Add Politician using thunk</button>


      <br></br>
      <h2>Actors: {storeObject.actorsReducer.actors.join()} </h2>
      <h2>Cricketers: {storeObject.cricketersReducer.cricketers.join()}</h2>
      <h2>Politicians: {storeObject.politiciansReducer.politicians.join()}</h2>
    </div>
  );
}

export default App;
