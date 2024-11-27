import React from 'react';
import { AffairType } from '../../HW2';
import s from './Affair.module.css';
import s2 from '../Affairs.module.css';

type AffairPropsType = {
    affair: AffairType; // Дело, которое нужно отобразить
    deleteAffairCallback: (id: number) => void; // Функция для удаления дела
};

function Affair(props: AffairPropsType) {
    // Обработчик кнопки удаления
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id); // Вызываем callback с _id дела
    };

    // CSS классы для стилизации
    const nameClass = `${s.name} ${s2[props.affair.priority]}`; // Название дела
    const buttonClass = `${s.closeButton} ${s2[props.affair.priority]}`; // Кнопка удаления
    const affairClass = `${s.affair} ${s2[props.affair.priority]}`; // Общий контейнер дела

    return (
        <div id={'hw2-affair-' + props.affair._id} className={affairClass}>
            {/* Название дела */}
            <div id={'hw2-name-' + props.affair._id} className={nameClass}>
                {props.affair.name}
            </div>

            {/* Приоритет дела (можно скрыть или отображать) */}
            <div id={'hw2-priority-' + props.affair._id} hidden>
                {props.affair.priority}
            </div>

            {/* Кнопка удаления */}
            <button
                id={'hw2-button-delete-' + props.affair._id}
                className={buttonClass}
                onClick={deleteCallback} // Обработчик кнопки удаления
            >
                X {/* Текст кнопки */}
            </button>
        </div>
    );
}

export default Affair;
