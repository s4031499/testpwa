import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white shadow">
      <div className="w-full h-20 flex justify-around items-center">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 relative" />
          <div className="text-[#091e6c] text-xs font-normal font-['Be Vietnam Pro'] leading-none">
            Dự án
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 relative" />
          <div className="text-[#526477] text-xs font-normal font-['Be Vietnam Pro'] leading-none">
            Quỹ căn
          </div>
        </div>
        <div className="relative">
          <img
            className="w-[75.72px] h-20 absolute -left-4"
            src="https://via.placeholder.com/76x80"
          />
          <div className="w-14 h-14 absolute left-4 top-3 bg-[#072182] rounded-full flex items-center justify-center">
            <div className="w-[38px] h-[38px] relative">
              <div className="w-[32.43px] h-[30.64px] absolute" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 relative" />
          <div className="text-[#526477] text-xs font-normal font-['Be Vietnam Pro'] leading-none">
            Giao dịch
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 relative" />
          <div className="text-[#526477] text-xs font-normal font-['Be Vietnam Pro'] leading-none">
            Lịch
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
