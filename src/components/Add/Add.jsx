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
        // <section className={styles.section}>
            <form className={styles.add} onSubmit={handleSubmit}>
                <input onChange={handleChange} className={styles.input} type="text" placeholder='할 일 작성하기' value={input} />
                <button className={styles.button}>추가</button>
            </form>
        // </section>
    );
}