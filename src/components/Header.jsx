import React from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import styles from './Header.module.css'
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header({ tab, handleMenu }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const menu = [
    'All',
    'Active',
    'Completed',
  ];

  const handleDarkMode = () => {
    toggleDarkMode();
  }

  const typeList = menu.map((name) => {
    return (
      <li>
        <button onClick={handleMenu} className={`${styles.button} ${ name === tab ? styles.active : '' }`}>{name}</button>
      </li>
    )
  })

  return (
      <header className={`${styles.header} ${ darkMode ? styles.dark : ''}`}>
          <div onClick={handleDarkMode} className={styles.imgWrap}>
            { darkMode ? <FaRegMoon color='white' fontSize='18px' /> : <FaRegSun fontSize='20px' /> }
          </div>
          <ul className={styles.list}>{typeList}</ul>
      </header>
  );
}

