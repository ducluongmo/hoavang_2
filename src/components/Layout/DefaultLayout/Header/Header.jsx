import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const handleOpenMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    const options2 = { month: 'numeric', day: 'numeric' };
    const date = new Date();
    const getYear = date.getFullYear()
    const dateTimeFormat2 = new Intl.DateTimeFormat('vi-VI', options2);
    const dateToday = dateTimeFormat2.format(date)
    const danh_sach_can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ']
    const danh_sach_chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi']
    function handleSolarCalendar(solarYear) {
        if ((solarYear % 10) >= 0 && (solarYear % 10) <= 9 && (solarYear % 12) >= 0 && (solarYear % 12) <= 11) {
            return `${danh_sach_can[solarYear % 10]} ${danh_sach_chi[solarYear % 12]}`
        }
    }

    return (
        <div className='relative'>
            <div className='header z-0 flex bg-blue-50 items-center'>
                <div className='flex-1'>
                    <button onClick={handleOpenMenu} className='p-3'><FaBars /></button>
                </div>
                <div className='flex-1'>
                    <p className='text-center uppercase text-black ip:text-sm'>Hóa vàng online</p>
                </div>
                <div className='flex flex-1 justify-end'>
                    <p className='p-3 ml-6 ip:p-0 ip:text-sm ip:mr-3'>{dateToday}, {handleSolarCalendar(getYear)}</p>
                </div>
            </div>
            {isShowMenu && (
                <div className={`menu absolute z-10 w-2/5 bg-black`}>
                    <ul className='text-white text-center'>
                        <li className='py-2 transition duration-500 hover:bg-slate-400 active:bg-slate-600'><a href="vankhan">Văn khấn</a></li>
                        <li className='py-2 transition duration-500 hover:bg-slate-400 active:bg-slate-600'><a href="#">Xem lịch âm</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header