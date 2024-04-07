function SideNav() {
  return (
    <div className="m-[0_73px_0_9px] flex flex-row w-[fit-content] box-sizing-border -mt-12">
        <div className="bg-[#FFFFFF] m-[2px_31px_140px_0] flex flex-col p-[5px_0_639px_0] box-sizing-border">
          <div className="border-b-[5px_solid_#DC5B19] bg-[#F0F0F0] m-[0_0_24px_0] flex flex-row p-[14px_0_9px_0] w-[224px] box-sizing-border">
            <div className="m-[1.5px_14px_1.5px_0] flex flex-row justify-center w-[20px] h-[17px] box-sizing-border">
              <img className="w-[20px] h-[17px]" />
            </div>
            <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-card-large,600)] text-[16px] text-[#1A0A02]">
            Home
            </span>
          </div>
          <div className="m-[0_12.4px_0_12.4px] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_36px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
              <div className="m-[6.7px_11.4px_6.7px_0] flex flex-row justify-center w-[11.2px] h-[6.6px] box-sizing-border">
                <img className="w-[11.2px] h-[6.6px]" />
              </div>
              <div className="flex flex-row box-sizing-border">
                <div className="m-[3px_15px_3px_0] flex flex-row justify-center w-[18px] h-[14px] box-sizing-border">
                  <img className="w-[18px] h-[14px]" />
                </div>
                <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-card-large,600)] text-[16px] text-[#1A0A02]">
                Console
                </span>
              </div>
            </div>
            <div className="flex flex-col self-end w-[fit-content] box-sizing-border">
              <div className="m-[0_0_43.9px_3px] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[0_15px_0_0] flex flex-row justify-center w-[18px] h-[20px] box-sizing-border">
                  <img className="w-[18px] h-[20px]" />
                </div>
                <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-card-large,600)] text-[16px] text-[#1A0A02]">
                Attendance
                </span>
              </div>
              <div className="m-[0_15.3px_44px_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[0_12px_0.1px_0] flex flex-row justify-center w-[24px] h-[20px] box-sizing-border">
                  <img className="w-[24px] h-[20px]" />
                </div>
                <div className="m-[0.1px_0_0_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-card-large,600)] text-[16px] text-[#1A0A02]">
                Overview
                </div>
              </div>
              <div className="m-[0_4px_0_4px] flex flex-row self-start w-[fit-content] box-sizing-border">
                <div className="m-[2px_16px_2px_0] flex flex-row justify-center w-[16px] h-[16px] box-sizing-border">
                  <img className="w-[16px] h-[16px]" />
                </div>
                <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-card-large,600)] text-[16px] text-[#1A0A02]">
                Staff
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SideNav