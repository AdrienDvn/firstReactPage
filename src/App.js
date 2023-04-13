// import logo from './logo.svg';
import React, {useState} from "react"
import './App.css';
import './index.css';
// import '/Users/adrien/code/BobZiroll/myfirstreactapp/src/logo192.png';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={darkMode}/>
    </div>
  );
}

export default App;
