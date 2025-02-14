import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
};

function Pages() {
    return (
        <Routes>
            {/* Перенаправление с '/' на '/pre-junior' */}
            <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
            <Route path={PATH.JUNIOR} element={<Junior />} />
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
            {/* Обработка неизвестных путей */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default Pages;

