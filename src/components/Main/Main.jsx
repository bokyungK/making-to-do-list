import React, { useState, useEffect } from 'react';
import List from '../List/List';
import styles from './Main.module.css';
import Add from '../Add/Add';

export default function Main({ tab }) {
    const [toDo, setToDo] = useState(readToDo);

    useEffect(() => {
        localStorage.setItem('toDo', JSON.stringify(toDo));
    }, [toDo]);

    const handleAdd = (newToDo) => {
        const updatedToDo = [...toDo, newToDo];
        setToDo(updatedToDo);
    }

    const handleDelete = (id) => {
        const updatedToDo = toDo.filter((list) => list.id !== id);
        setToDo(updatedToDo);
    }

    const handleChecked = (upToDo) => {
        const updatedToDo = toDo.map((olToDo) => upToDo.id === olToDo.id ? upToDo : olToDo);
        setToDo(updatedToDo)
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
