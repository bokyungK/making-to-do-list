import React, { useState } from 'react';
import styles from './List.module.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function List({ toDo, handleDelete, handleChecked, tab }) {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const filteredToDo = toDo.filter((list) => {
        if (tab === 'Active') return list.checked === false;
        else if (tab === 'Completed') return list.checked === true;
        else return true;
    })

    const toDoList = filteredToDo.map((list, idx) => {
        const title = list.title;

        return (
            <li className={styles.item}>
                <div>
                    <input type='checkbox' onChange={handleChecked} value={title} checked={list.checked} data-order={idx} />
                    <span>{title}</span>
                </div>
                <div onClick={handleDelete} data-order={idx}>
                    <FaRegTrashCan />
                </div>
            </li>
        )
    })

    return (
        <section className={`${styles.section} ${ darkMode ? styles.dark : '' }`}>
            <ul className={styles.todo}>{toDoList}</ul>
        </section>
    );
}

