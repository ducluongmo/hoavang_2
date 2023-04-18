import Header from "./Header/Header";

import React from 'react'

const DefaultLayout = ({ children }) => {
    return (
        <div className='flex w-full justify-center'>
            <div className='w-5w ip:w-full'>
                <Header />
                <div className="content-page">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout