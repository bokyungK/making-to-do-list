import React, { useState, useEffect, useContext } from 'react';
import Add from './Add';
import List from './List';
import styles from './Main.module.css';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Main({ tab }) {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [toDo, setToDo] = useState([])

    useEffect(() => {
        const localToDo = JSON.parse(localStorage.getItem('toDo'));
        if (localToDo) setToDo(localToDo);
    }, []);

    const handleAdd = (e) => {
        const title = e.target.dataset.title;
        if (title) setToDo((prev) => [...prev, { title, checked: false }])
        localStorage.setItem("toDo", JSON.stringify(toDo));
    }

    const handleDelete = (e) => {
        const order = Number(e.currentTarget.dataset.order);
        setToDo((prev) => prev.filter((list, idx) => {
            return order !== idx;
        }))
        localStorage.setItem("toDo", JSON.stringify(toDo));
    }

    const handleChecked = (e) => {
        const order = Number(e.target.dataset.order);
        setToDo((prev) => prev.map((list, idx) => {
                if (order === idx) return { ...list, checked: !list.checked }
                return list;
            })
        )
        localStorage.setItem("toDo", JSON.stringify(toDo));
    }

    return (
        <main className={`${styles.main} ${ darkMode ? styles.dark : ''}`}>
            <List toDo={toDo} handleDelete={handleDelete} handleChecked={handleChecked} tab={tab} />
            <Add handleAdd={handleAdd} />
        </main>
    );
}
