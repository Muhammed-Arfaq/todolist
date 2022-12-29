import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2></h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, {id:Date.now(), text: toDo, Status: false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {

            
            return( <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDo(toDos.filter(obj2 => {
                    if(obj2.id === obj.id) {
                      obj2.Status = e.target.checked 
                    }
                    return obj2
                  }))
                }} value={obj.Status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => setToDos((toDos.filter((toDo)=>{
                  if(toDo.id != obj.id){
                    return toDo
                  }
                })))} className="fas fa-times"></i>
                
              </div>
            </div> )

          })
        }
          {/* {
            toDos.map((obj)=>{
              if(obj.Status) {
                return(
                  <h1>{obj.text}</h1>                  
                )
              }
              return null
            })
          } */}
      </div>
    </div>
  );
}

export default App;
