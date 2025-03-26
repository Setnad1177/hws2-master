import React, { useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | undefined>(undefined); // Исправляем тип
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        if (!timerId) {
            const id = setInterval(() => {
                setDate(new Date()); // обновляем дату каждую секунду
            }, 1000);
            setTimerId(id); // сохраняем id таймера
        }
    };

    const stop = () => {
        if (timerId) {
            clearInterval(timerId); // останавливаем таймер
            setTimerId(undefined); // очищаем id таймера
        }
    };

    const onMouseEnter = () => { // показываем дату при наведении мыши
        setShow(true);
    };

    const onMouseLeave = () => { // скрываем дату при убирании мыши
        setShow(false);
    };

    // Функция для добавления ведущего нуля
    const formatTime = (num: number) => num.toString().padStart(2, '0');

    // Форматированное время
    const stringTime = `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}:${formatTime(date.getSeconds())}`;

    // Форматированная дата
    const stringDate = `${formatTime(date.getDate())}.${formatTime(date.getMonth() + 1)}.${date.getFullYear()}`;

    const stringDay = date.toLocaleString('en', { weekday: 'long' });
    const stringMonth = date.toLocaleString('en', { month: 'long' });

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <br />
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // кнопка старт дизэйблится, если таймер работает
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // кнопка стоп дизэйблится, если таймер не работает
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
