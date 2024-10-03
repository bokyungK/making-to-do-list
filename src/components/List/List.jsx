import React from 'react';
import styles from './List.module.css'
import { FaRegTrashCan } from "react-icons/fa6";

export default function List({ toDo, handleDelete, handleChecked, tab }) {
    const filteredToDo = toDo.filter((list) => {
        if (tab === 'Active') return list.checked === false;
        else if (tab === 'Completed') return list.checked === true;
        else return true;
    })

    return (
      <section className={styles.section}>
        <ul className={styles.todo}>
          {
            filteredToDo.map((list) => {
              const { title, checked, id } = list;
        
              return (
                <li key={ id } className={styles.item}>
                  <div>
                    <input className={styles.checkbox} type='checkbox' id={id} onChange={() => handleChecked({ ...list, checked: !checked })} value={title} checked={checked} />
                    <label htmlFor={id}>{title}</label>
                  </div>
                  <button className={styles.trashcan} onClick={() => handleDelete(id)}>
                    <FaRegTrashCan />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </section>
    );
}

