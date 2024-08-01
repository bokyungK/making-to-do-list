import React, { useState } from 'react';
import styles from './Add.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function Add({ handleAdd }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        handleAdd({ title: input.trim(), checked: false, id: uuidv4() });
        setInput('');
    }

    return (
        <section className={styles.section}>
            <form className={styles.add} onSubmit={handleSubmit}>
                <input onChange={handleChange} className={styles.input} type="text" placeholder='Add Todo' value={input} />
                <button className={styles.button}>Add</button>
            </form>
        </section>
    );
}