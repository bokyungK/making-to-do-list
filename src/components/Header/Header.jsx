import React from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import styles from './Header.module.css'
import { useDarkMode } from '../../context/DarkModeContext';

const SPRING_PAPER = Array.from({length: 10}, (v, i) => i);

export default function Header({ tab, handleMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menu = [
    { type: 'All', name: '전체' },
    { type: 'Active', name: '진행중' },
    { type: 'Completed', name: '완료' },
  ];

  return (
      <header className={styles.header}>
        <div className={styles.springs}>
          {
            SPRING_PAPER.map((num) => {
              return <div key={num} className={styles.spring}></div>
            })
          }
        </div>
        <div className={styles.papers}>
          {
            SPRING_PAPER.map((num) => {
              return <div key={num} className={styles.paper}></div>
            })
          }
        </div>
        <div className={styles.menu}>
          <div onClick={toggleDarkMode} className={styles.imgWrap}>
            { darkMode ? <FaRegMoon fontSize='18px' /> : <FaRegSun fontSize='20px' /> }
          </div>
          <ul className={styles.list}>
            {
              menu.map((item) => {
                const { type, name } = item;
                return (
                  <li key={type}>
                    <button onClick={() => handleMenu(type)} className={`${styles.button} ${ type === tab && styles.active }`}>{name}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </header>
  );
}

