function MobileFooter() {
  return (
    <div className="relative p-[28px_0_0_0] w-[100%] box-sizing-border">
        <div className="rounded-[100px] bg-[#5F69C7] absolute left-[50%] top-[0px] translate-x-[-50%] flex flex-row justify-center p-[18.7px_18.7px_18.7px_18.7px] w-[56px] h-[56px] box-sizing-border -mr-[50%]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwscdC_mDJTx39f3vakNRoQBVDxzAMIeWExCGPrcfMMw&s" className="w-[18.7px] h-[18.7px]" />
        </div>
        <div className="shadow-[var(--shadow-front,0px_-3px_12px_0px_rgba(0,0,0,0.1))] rounded-t-[12px] bg-[#FFFFFF] relative flex flex-row justify-between p-[15.5px_0_12px_0] w-[100%] h-[fit-content] box-sizing-border">
          <div className="flex flex-col items-center box-sizing-border ml-[38%]">
            <div className="m-[0_5px_7.5px_5.5px] flex flex-row justify-center w-[20px] h-[17px] box-sizing-border">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/1024px-Facebook_Home_logo.svg.png" className="w-[25px] h-[20px]" />
            </div>
            <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textoutline-text,500)] text-[10px] text-[#5F69C7]">
            Home
            </span>
          </div>
          <div className="m-[1.5px_0_0_0] flex flex-col items-center box-sizing-border mr-[45%]">
            <div className="m-[0_10.8px_9px_11.5px] flex flex-row justify-center w-[18px] h-[14px] box-sizing-border">
              <img src="https://e7.pngegg.com/pngimages/848/868/png-clipart-rectangular-logo-illustration-computer-icons-svg-list-icon-miscellaneous-angle.png" className="w-[25px] h-[14px]" />
            </div>
            <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textoutline-text,500)] text-[10px] text-[#1A0A02]">
            Console
            </span>
          </div>
        </div>
      </div>
  )
}

export default MobileFooter