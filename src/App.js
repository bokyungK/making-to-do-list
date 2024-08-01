import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';
import styles from './App.module.css'
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [tab, setTab] = useState('All');

  const handleMenu = (name) => setTab(name);

  return (
    <DarkModeProvider>
      <div className={styles.app}>
        <Header tab={tab} handleMenu={handleMenu} />
        <Main tab={tab} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
