import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from "./components/Nav";
import AddTask from "./components/AddTask";


function App() {

  return (
    
    <div className="App">
      <Nav />
      <div className="container">
        <AddTask />
      </div>

    </div>
  );
}

export default App;
