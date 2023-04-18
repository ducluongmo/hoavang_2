import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from 'react'
import ban from '~/asset/image/ban.png'
import lu from '~/asset/image/lu2.png'
import ngua from '~/asset/image/ngua.png'
import ongcong from '~/asset/image/quanaobole.png'
import tien from '~/asset/image/tienvang.png'
import xe from '~/asset/image/dodung.png'
import Video from '~/asset/video/fire.mp4'

const Content = () => {
  const [isShowSaple, setIsShowSaple] = useState(false)
  const handleIsShowSaple = () => {
    setIsShowSaple(!isShowSaple)
  }

  const [isShowFire, setIsShowFire] = useState(false)
  const handleFire = () => {
    setIsShowFire(!isShowFire)
  }

  const [img, setImg] = useState('')
  const handleImg = (e) => {
    setImg(e.target.src)
  }
  const [imgs, setImgs] = useState(() => {
    return JSON.parse(localStorage.getItem("imgs")) ?? []
  });
  const handleImgs = () => {
    // setImgs((prev) => [...prev, img])
    setImgs((prev) => {
      const newImgs = [...prev, img]
      localStorage.setItem("imgs", JSON.stringify(newImgs));
      return newImgs;
    });
  }

  const handleImgsDelete = (key) => {
    setImgs((prev) => {
      const newImgs = prev.filter((item, index) => index !== key)
      localStorage.setItem("imgs", JSON.stringify(newImgs))
      return newImgs
    })
  }

  const handleImgsDeleteAll = () => {
    // setImgs(prev => [])
    setImgs((prev) => {
      prev = []
      localStorage.setItem("imgs", JSON.stringify(prev));
      return prev;
    });
  }

  return (
    <div className='content bg-content-img h-93vh bg-no-repeat bg-cover ip:bg-cover bg-center ip:h-93vh relative z-0'>
      <button className='btn top-52 px-1' onClick={() => {
        handleFire();
        handleImgsDeleteAll();
      }}>Hóa vàng</button>
      <button className='btn btn-saple top-64 px-2' onClick={handleIsShowSaple}>
        Sắp lễ
      </button>
      {isShowFire && (<button className="btn top-76 px-1" onClick={handleFire}>Ngưng</button>)}
      {isShowSaple && (
        <div className={`saple absolute bg-black opacity-75 items-center h-28 top-72 w-full`}>
          <button className="float-right text-white" onClick={handleIsShowSaple}><AiFillCloseCircle /></button>
          <div className="item-saple mt-6 flex z-10">
            <img onMouseOver={handleImg} onClick={handleImgs} className='img' src={ngua} alt="" />
            <img onMouseOver={handleImg} onClick={handleImgs} className='img' src={ongcong} alt="" />
            <img onMouseOver={handleImg} onClick={handleImgs} className='img' src={tien} alt="" />
            <img onMouseOver={handleImg} onClick={handleImgs} className='img' src={xe} alt="" />
          </div>
        </div>
      )}
      {
        isShowFire && (
          <video src={Video} autoPlay muted loop className="absolute bottom-w5 left-7 rounded-xl h-8"></video>
        )
      }
      <img className='absolute h-32 bottom-28' src={lu} />
      <div>
        <img className='absolute z-0 bottom-0 ml-5 ip:ml-0 h-' src={ban} alt="" />
        <div className="flex flex-wrap-reverse justify-evenly ml-5 w-4w absolute bottom-14 z-10">
          
          {
            imgs.map((img, index) => (
              <div>
                <button className="float-right text-white" key={index} onClick={() => handleImgsDelete(index)}><AiFillCloseCircle/></button>
                <img className="h-16" key={index} src={img} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Content