import React from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import styles from './Header.module.css'
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({ tab, handleMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menu = [
    'All',
    'Active',
    'Completed',
  ];

  const typeList = menu.map((name, idx) => {
    return (
      <li key={idx}>
        <button onClick={() => handleMenu(name)} className={`${styles.button} ${ name === tab && styles.active }`}>{name}</button>
      </li>
    )
  })

  return (
      <header className={styles.header}>
          <div onClick={toggleDarkMode} className={styles.imgWrap}>
            { darkMode ? <FaRegMoon color='white' fontSize='18px' /> : <FaRegSun fontSize='20px' /> }
          </div>
          <ul className={styles.list}>{typeList}</ul>
      </header>
  );
}

