import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Vankhan = () => {
  const [ishowVanKhan, setIsShowVanKhan] = useState(false)
  const handleVanKhan = () => {
    setIsShowVanKhan(!ishowVanKhan)
  }
  
  return (
    <div className='relative'>
      <div className={`content-vankhan relative`}>
        <div className='flex justify-evenly bg-slate-800 opacity-70 text-yellow-50'>
          <button className='btn-show' onClick={handleVanKhan}>Xem văn khấn</button>
          <button>Xem văn khấn</button>
          <button>Xem văn khấn</button>
        </div>
        <a className='btn-back flex items-center' href='/'>
          <BiArrowBack className='mr-2' /> Quay lại hóa vàng
        </a>
      </div>
      {ishowVanKhan && (
          <div className='dropdown-content absolute top-23 w-full h-3/5 bg-black text-white'>
            <div className='text-sm leading-5 p-2'>
              <p>Nam mô A Di Đà Phật (3 lần)</p>
              <p>Con kính lạy chín phương trời, mười phương chư Phật, chư Phật mười phương</p>
              <p>Con kính lạy Hoàng thiên, Hậu thổ, Long mạch, Táo quân, chư vị tôn thần</p>
              <p>Con kính lạy Ngài Đương niên hành khiển, ngài Bản cảnh Thành hoàng, các ngài Thổ địa, Táo quân, Long mạch tôn thần.</p>
              <p>Con kính lạy các cụ tổ khảo, tổ tỷ, nội ngoại tiên linh.</p>
              <p>Hôm nay là ngày... tháng... năm...</p>
              <p>Chúng con là... tuổi...</p>
              <p>Hiện cư ngụ tại...</p>
              <p>Thành tâm sửa biện hương hoa phẩm vật, phù tửu lễ nghi, cung bày trước án. Kính cẩn thưa trình: Tiệc xuân đã mãn, Nguyên đán đã qua, nay xin thiêu hóa kim ngân, lễ tạ tôn thần, rước tiễn âm linh trở về âm cảnh.</p>
              <p>Kính xin lưu phúc, lưu ân, phù hộ độ trì dương cơ âm trạch, mọi chỗ tốt lành, con cháu được bách sự như ý, vạn sự bình an, tài lộc song toàn, gia đạo hưng vượng.</p>
              <p>Lòng thành kính cẩn, lễ bạc tiến dâng, lượng cả xét soi, cúi xin chứng giám.</p>
              <p>Nam mô A Di Đà Phật (3 lần)</p>
            </div>
            <button className='btn-hidden' onClick={handleVanKhan}>Đóng</button>
          </div>
        )}
    </div>
  )
}

export default Vankhan