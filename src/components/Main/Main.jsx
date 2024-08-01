import React, { useState, useEffect } from 'react';
import List from '../List/List';
import styles from './Main.module.css';
import Add from '../Add/Add';

export default function Main({ tab }) {
    const [toDo, setToDo] = useState(readToDo);

    // useEffect(() => {
    //     const localToDo = JSON.parse(localStorage.getItem('toDo'));
    //     if (localToDo) setToDo(localToDo);
    // }, []);

    useEffect(() => {
        localStorage.setItem('toDo', JSON.stringify(toDo));
    }, [toDo]);

    const handleAdd = (newToDo) => {
        const updatedToDo = [...toDo, newToDo];
        setToDo(updatedToDo);
        // localStorage.setItem("toDo", JSON.stringify(updatedToDo));
    }

    const handleDelete = (id) => {
        const updatedToDo = toDo.filter((list) => list.id !== id);
        setToDo(updatedToDo);
        // localStorage.setItem("toDo", JSON.stringify(updatedToDo));
    }

    const handleChecked = (upToDo) => {
        const updatedToDo = toDo.map((olToDo) => upToDo.id === olToDo.id ? upToDo : olToDo);
        setToDo(updatedToDo)
        // localStorage.setItem("toDo", JSON.stringify(updatedToDo));
    }

    return (
        <main className={styles.main}>
            <List toDo={toDo} handleDelete={handleDelete} handleChecked={handleChecked} tab={tab} />
            <Add handleAdd={handleAdd} />
        </main>
    );
}

function readToDo() {
    const toDo = localStorage.getItem('toDo');
    return toDo ? JSON.parse(toDo) : [];
}
