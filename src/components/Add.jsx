import React, { useState, useContext } from 'react';
import styles from './Add.module.css'
import { DarkModeContext } from '../context/DarkModeContext';

export default function Add({ handleAdd }) {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [input, setInput] = useState('');


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClear = (e) => {
        setInput('');
    }

    return (
        <section className={`${styles.section} ${ darkMode ? styles.dark : ''}`}>
            <div className={styles.add}>
                <input onChange={handleChange} className={styles.input}type="text" placeholder='Add Todo' value={input} />
                <button onClick={(e) => {
                    handleAdd(e);
                    handleClear();
                }} className={styles.button} data-title={input}>Add</button>
            </div>
        </section>
    );
}