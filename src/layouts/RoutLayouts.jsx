import React from 'react'

// recat-router-dom
import { Outlet } from 'react-router-dom'
//  Components
import Header from '../components/header';
import Footer from '../components/footer';

// styles
import './style.css'
const RoutLayouts = () => {
    return (
        <>
            {/* Header */}
            <Header />

            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default RoutLayouts