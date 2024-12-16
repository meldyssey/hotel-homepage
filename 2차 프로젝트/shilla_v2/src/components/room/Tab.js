import '../../scss/common.scss';
import '../../scss/reset.css';
import '../../scss/sub-list.scss';
import '../../scss/sub-detail.scss';
import '../../scss/sub-room.scss';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

const Tab = () => {
    const location = useLocation()

    useEffect ( () => {
        console.log(location)
    }, [location])

    return (
        <ul className="tab">
            <li className={`tab1 ${location.pathname === '/standard' ? 'on' : ''}`}>
                <Link to="/standard">디럭스</Link>
            </li>
            <li className={`tab2 ${location.pathname === '/businessDeluxe' ? 'on' : ''}`}>
                <Link to="/businessDeluxe">비즈니스 디럭스</Link>
            </li>
            <li className={`tab3 ${location.pathname === '/barrierFreeDeluxe' ? 'on' : ''}`}>
                <Link to="/barrierFreeDeluxe">배리어프리 비즈니스 디럭스</Link>
            </li>
            <li className={`tab4 ${location.pathname === '/grandCornerDeluxe' ? 'on' : ''}`}>
                <Link to="/grandCornerDeluxe">그랜드 코너 디럭스</Link>
            </li>
        </ul>
    )
}

export default Tab;