import logo from './logo.svg';
import './App.css';
import Create from './Component/Create';

function App() {
  return (
    <div className = "main">
      <h2 className = "main-heading">React Crud Form</h2>

      <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;
