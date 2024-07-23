import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import styles from './App.module.css'

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [tab, setTab] = useState('All');

  const handleMenu = (e) => {
    const name = e.target.innerText;
    setTab(name);
  }

  return (
    <div className={`${styles.outer} ${ darkMode ? styles.dark : ''}`}>
      <div className={styles.inner}>
        <Header tab={tab} handleMenu={handleMenu} />
        <Main tab={tab} />
      </div>
    </div>
  );
}

export default App;
