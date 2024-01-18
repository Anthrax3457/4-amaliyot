import React, { useEffect, useState } from 'react'

// recat-router-dom
import { Outlet } from 'react-router-dom'
//  Components
import Header from '../components/header';
import Footer from '../components/footer';

// styles
import './style.css'
import Loader from '../views/loader';
const RoutLayouts = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 5 sekunddan keyin loading holatini false qilish
        const timeoutId = setTimeout(() => {
            setLoading(false);
        },500);

        // Timeout tugaganida cleanup qilish
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <>
            {loading ? (
                <div className='bg-[#282726] h-[100%] pt-[20%]'>
                    <Loader /> 
                </div>
            ) :
                (
                    <div>
                        < Header />

                        <main>
                            <Outlet />
                        </main>

                        <Footer />
                    </div>
                )}
        </>
    )
}

export default RoutLayouts