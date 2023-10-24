import './App.css';
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <BrowserRouter>
        <Routes>
        <  Route exact path="/" element={<Create/>}/> 
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/read" element={<Read/>}/>
          <Route exact path="/update" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
