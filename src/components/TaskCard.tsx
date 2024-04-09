import { useState, useEffect } from 'react';

function TaskCard() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIsMobile = () => {
    const viewportWidth = window.innerWidth;
    const mobileBreakpoint = 380; // You can adjust this breakpoint as needed
    setIsMobile(viewportWidth < mobileBreakpoint);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  return (
    
    <div className="flex flex-col box-sizing-border -mt-12 -ml-16  w-screen">
      {!isMobile && (
      <div className="m-[0_0_24px_0] flex flex-row justify-center self-start box-sizing-border">
        <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title,600)] text-[24px] text-[#1A0A02]">
          Tasks of the day
        </span>
      </div>
      )}
      
      <div className="m-[0_0_24px_0] flex flex-row self-start gap-[0_8px] w-[fit-content] box-sizing-border">
        <div className=" rounded-[20px] border border-grey border-solid  flex flex-row justify-center p-[4px_7.6px_4px_7px] box-sizing-border">
          <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
            Not Accepted
          </span>
        </div>
        <div className="rounded-[20px] border border-grey border-solid border-[1px_solid_#B8B8B8] flex flex-row justify-center p-[4px_7.9px_4px_7px] box-sizing-border">
          <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
            Ongoing
          </span>
        </div>
        <div className="rounded-[20px] border border-grey border-solid border-[1px_solid_#B8B8B8] flex flex-row justify-center p-[4px_7.9px_4px_7px] box-sizing-border">
          <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
            Scheduled
          </span>
        </div>
        <div className="rounded-[20px] border border-grey border-solid border-[1px_solid_#B8B8B8] flex flex-row justify-center p-[4px_7.9px_4px_7px] box-sizing-border">
          <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
            Completed
          </span>
        </div>
        <div className="flex flex-row box-sizing-border">
          <div className="rounded-[20px] border border-grey border-solid border-[1px_solid_#B8B8B8] m-[0_8px_0_0] flex flex-row justify-center p-[4px_7.5px_4px_7px] box-sizing-border">
            <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
              Delayed
            </span>
          </div>
          <div className="rounded-[20px] border border-grey border-solid border-[1px_solid_#B8B8B8] flex flex-row justify-center p-[4px_7.8px_4px_7px] box-sizing-border">
            <span className="break-words font-['Encode_Sans_Expanded'] font-medium text-[14px] text-[#767676]">
              Ontime
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[0_24px] w-[fit-content] box-sizing-border">
            <div className="m-[0_0_92px_0] flex flex-col w-[360px] box-sizing-border">
              <div className="border border-grey border-solid rounded-[12px]  m-[0_0_24px_0] flex flex-row justify-center w-[360px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row justify-center p-[4px_8.4px_4px_8px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#CC2610]">
                        Not Accepted
                        </span>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[1.5px_0_1.5px_0] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/016/186/968/small/reload-refresh-arrow-direction-rotate-icon-symbol-sign-free-vector.jpg" className="w-[14.7px] h-[16px]" />
                      </div>
                    </div>
                    <div className="m-[1px_0_1px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#D7FFE7] flex flex-row p-[2px_4.4px_2px_5.3px] box-sizing-border">
                        <div className="m-[1.8px_5.3px_1.8px_0] flex flex-row justify-center w-[13.3px] h-[13.3px] box-sizing-border">
                          <img className="w-[13.3px] h-[13.3px]" />
                        </div>
                        <span className="break-words font-['Montserrat'] font-medium text-[14px] text-[#00A441]">
                        20min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_12.5px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_10px_3px_0] inline-block w-[251px] break-words font-['Encode_Sans_Expanded'] font-semibold text-[16px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                      Guest Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.3px_12.5px_2px] flex flex-row justify-between w-[341.7px] box-sizing-border">
                    <div className="relative p-[0.8px_0_0.8px_0] w-[153.8px] h-[15px] box-sizing-border">
                      <div className="flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <span className="absolute right-[0px] bottom-[0px] break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="justify-center rounded-[20px] bg-[#5F69C7] flex flex-row p-[9.7px_0_9.7px_0] w-[344px] box-sizing-border">
                    <div className="m-[0_9.7px_0_0] flex flex-row justify-center w-[16.7px] h-[16.7px] box-sizing-border">
                      <img className="w-[16.7px] h-[16.7px]" />
                    </div>
                    <div className="m-[0.8px_0_0.8px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#FFECE2]">
                    Notify Staff
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center w-[360px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row justify-center p-[4px_8.4px_4px_8px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#CC2610]">
                        Not Accepted
                        </span>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[1.5px_0_1.5px_0] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/016/186/968/small/reload-refresh-arrow-direction-rotate-icon-symbol-sign-free-vector.jpg" className="w-[14.7px] h-[16px]" />
                      </div>
                    </div>
                    <div className="m-[1px_0_1px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#F4D8D8] flex flex-row p-[2px_4.6px_2px_5.3px] box-sizing-border">
                        <div className="m-[1.8px_5.3px_1.8px_0] flex flex-row justify-center w-[13.3px] h-[13.3px] box-sizing-border">
                          <img className="w-[13.3px] h-[13.3px]" />
                        </div>
                        <span className="break-words font-['Montserrat'] font-medium text-[14px] text-[#CC2610]">
                        1min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_12.5px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_10px_3px_0] inline-block w-[239px] break-words font-['Encode_Sans_Expanded'] font-semibold text-[16px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.3px_12.5px_2px] flex flex-row justify-between w-[341.7px] box-sizing-border">
                    <div className="relative p-[0.8px_0_0.8px_0] w-[153.8px] h-[15px] box-sizing-border">
                      <div className="flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <span className="absolute right-[0px] bottom-[0px] break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="justify-center rounded-[20px] bg-[#CC2610] flex flex-row p-[9.7px_0_9.7px_0] w-[344px] box-sizing-border">
                    <div className="m-[0_9.7px_0_0] flex flex-row justify-center w-[16.7px] h-[16.7px] box-sizing-border">
                      <img className="w-[16.7px] h-[16.7px]" />
                    </div>
                    <div className="m-[0.8px_0_0.8px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#FFECE2]">
                    Notify Staff
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center w-[360px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row justify-center p-[4px_8.1px_4px_8px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#F1AE11]">
                        Ongoing
                        </span>
                        </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] m-[1.5px_0_1.5px_0] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                        <img className="w-[14.7px] h-[14.7px]" />
                      </div>
                    </div>
                    <div className="m-[1px_0_1px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#D7FFE7] flex flex-row p-[2px_4.4px_2px_5.3px] box-sizing-border">
                        <div className="m-[1.8px_5.3px_1.8px_0] flex flex-row justify-center w-[13.3px] h-[13.3px] box-sizing-border">
                          <img className="w-[13.3px] h-[13.3px]" />
                        </div>
                        <span className="break-words font-['Montserrat'] font-medium text-[14px] text-[#00A441]">
                        20min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_12.5px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_10px_3px_0] inline-block w-[239px] break-words font-['Encode_Sans_Expanded'] font-semibold text-[16px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.3px_12.5px_2px] flex flex-row justify-between w-[341.7px] box-sizing-border">
                    <div className="relative p-[0.8px_0_0.8px_0] w-[153.8px] h-[15px] box-sizing-border">
                      <div className="flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <span className="absolute right-[0px] bottom-[0px] break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_0_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col p-[8px_8px_8px_8px] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_6px_4px_6px] w-[24px] h-[20px] box-sizing-border">
                        <img src="https://cdn.icon-icons.com/icons2/2716/PNG/512/number_square_one_icon_172987.png" className="w-[12px] h-[12px]" />
                      </div>
                      </div>
                    <div className="m-[1px_0_1px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#D7FFE7] flex flex-row p-[2px_4.4px_2px_5.3px] box-sizing-border">
                        <div className="m-[1.8px_5.3px_1.8px_0] flex flex-row justify-center w-[13.3px] h-[13.3px] box-sizing-border">
                          <img className="w-[13.3px] h-[13.3px]" />
                        </div>
                        <span className="break-words font-['Montserrat'] font-medium text-[14px] text-[#00A441]">
                        20min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_12.5px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_10px_3px_0] inline-block w-[239px] break-words font-['Encode_Sans_Expanded'] font-semibold text-[16px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.3px_12.5px_2px] flex flex-row justify-between w-[341.7px] box-sizing-border">
                    <div className="relative p-[0.8px_0_0.8px_0] w-[153.8px] h-[15px] box-sizing-border">
                      <div className="flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <span className="absolute right-[0px] bottom-[0px] break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-medium text-[12px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#F7F7F7] m-[0_0_12px_0] flex flex-col p-[12px_0_12px_12px] w-[fit-content] box-sizing-border">
                    <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                      <span className="m-[0_8.1px_0_0] break-words font-['Montserrat'] font-bold text-[12px] text-[#1A0A02]">
                      Shampoo
                      </span>
                      <span className="break-words font-['Montserrat'] font-[var(--textdescription-text,400)] text-[12px] text-[#5D5E60]">
                      x1
                      </span>
                    </div>
                    <div className="m-[0_0_12px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
                      <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                        <span className="m-[0_8.5px_0_0] break-words font-['Montserrat'] font-bold text-[12px] text-[#1A0A02]">
                        Conditioner
                        </span>
                        <span className="break-words font-['Montserrat'] font-[var(--textdescription-text,400)] text-[12px] text-[#5D5E60]">
                        x2
                        </span>
                      </div>
                      <p className="break-words font-['Montserrat'] font-[var(--textdescription-text,400)] text-[12px] text-[#B8B8B8]">
                      <span className="instructions-please-get-conditioners-sub-19"></span><span className="instructions-please-get-conditioners-sub-18"></span><span></span>
                      </p>
                    </div>
                    <div className="flex flex-row self-start w-[fit-content] box-sizing-border">
                      <span className="m-[0_8.3px_0_0] break-words font-['Montserrat'] font-bold text-[12px] text-[#1A0A02]">
                      Towel
                      </span>
                      <span className="break-words font-['Montserrat'] font-[var(--textdescription-text,400)] text-[12px] text-[#5D5E60]">
                      x2
                      </span>
                    </div>
                  </div>
                  <div className="justify-center rounded-[20px] bg-[#5F69C7] flex flex-row p-[9.7px_0_9.7px_0] w-[344px] box-sizing-border">
                    <div className="m-[0_9.7px_0_0] flex flex-row justify-center w-[16.7px] h-[16.7px] box-sizing-border">
                      <img className="w-[16.7px] h-[16.7px]" />
                    </div>
                    <div className="m-[0.8px_0_0.8px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#FFECE2]">
                    Notify Staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-[0_0_15px_0] flex flex-col items-center box-sizing-border">
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col p-[8px_8px_8px_8px] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                    <div className="rounded-[4px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                      <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                        <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                      </div>
                      <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                      Rajesh
                      </div>
                      <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/016/186/968/small/reload-refresh-arrow-direction-rotate-icon-symbol-sign-free-vector.jpg" className="w-[14.7px] h-[16px]"  />
                    </div>
                  </div>
                  <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[319px] box-sizing-border">
                    <div className="m-[0_7.5px_8px_0] inline-block w-[216.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[316.4px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <div className="m-[0.7px_0px_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </div>
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[318px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[319px] box-sizing-border">
                    <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[319px] h-[fit-content] box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                      View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_24px_0] flex flex-col p-[8px_8px_8px_8px] w-[fit-content] box-sizing-border">
                <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="rounded-[4px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                    <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                      <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                    </div>
                    <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                    Rajesh
                    </div>
                    <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_6px_4px_6px] w-[24px] h-[20px] box-sizing-border">
                    <img src="https://cdn.icon-icons.com/icons2/2716/PNG/512/number_square_one_icon_172987.png"  className="w-[12px] h-[12px]"/>
                  </div>
                </div>
                <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[319px] box-sizing-border">
                  <div className="m-[0_7.5px_8px_0] inline-block w-[228.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                  Routine Cleaning
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                    Guest Task
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[316.4px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                      <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                    </div>
                    <div className="m-[0.7px_0px_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                     21 Jul 2024 | 03:00 am
                    </div>
                  </div>
                  <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                    # 68988
                    </span>
                  </div>
                </div>
                <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[318px] box-sizing-border">
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    From:Pantry
                    </span>
                  </div>
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    To:Reception
                    </span>
                  </div>
                </div>
                <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[319px] box-sizing-border">
                  <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[319px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                    View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col p-[8px_8px_8px_8px] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                    <div className="rounded-[4px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                      <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                        <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                      </div>
                      <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                      Rajesh
                      </div>
                      <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                      <img  src="https://static.vecteezy.com/system/resources/thumbnails/016/186/968/small/reload-refresh-arrow-direction-rotate-icon-symbol-sign-free-vector.jpg" className="w-[14.7px] h-[16px]" />
                    </div>
                  </div>
                  <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[319px] box-sizing-border">
                    <div className="m-[0_7.5px_8px_0] inline-block w-[216.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[316.4px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <div className="m-[0.7px_0px_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </div>
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[318px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[319px] box-sizing-border">
                    <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[319px] h-[fit-content] box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                      View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col p-[8px_8px_8px_8px] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                    <div className="rounded-[4px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                      <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                        <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                      </div>
                      <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                      Rajesh
                      </div>
                      <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[2.7px_4.7px_2.7px_4.7px] w-[24px] h-[20px] box-sizing-border">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/016/186/968/small/reload-refresh-arrow-direction-rotate-icon-symbol-sign-free-vector.jpg" className="w-[14.7px] h-[16px]" />
                    </div>
                  </div>
                  <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[319px] box-sizing-border">
                    <div className="m-[0_7.5px_8px_0] inline-block w-[216.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[316.4px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <div className="m-[0.7px_0px_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </div>
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[318px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[319px] box-sizing-border">
                    <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[319px] h-[fit-content] box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                      View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col p-[8px_8px_8px_8px] w-[fit-content] box-sizing-border">
                <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="rounded-[4px] bg-[#F7F7F7] m-[0_4px_0_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                    <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                      <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                    </div>
                    <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                    Rajesh
                    </div>
                    <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_6px_4px_6px] w-[24px] h-[20px] box-sizing-border">
                    <img src="https://cdn.icon-icons.com/icons2/2716/PNG/512/number_square_one_icon_172987.png" className="w-[12px] h-[12px]" />
                  </div>
                </div>
                <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[319px] box-sizing-border">
                  <div className="m-[0_7.5px_8px_0] inline-block w-[228.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                  Routine Cleaning
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                    Guest Task
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[316.4px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                      <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                    </div>
                    <div className="m-[0.7px_0px_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                     21 Jul 2024 | 03:00 am
                    </div>
                  </div>
                  <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                    # 68988
                    </span>
                  </div>
                </div>
                <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[318px] box-sizing-border">
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    From:Pantry
                    </span>
                  </div>
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    To:Reception
                    </span>
                  </div>
                </div>
                <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[319px] box-sizing-border">
                  <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[319px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                    View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center box-sizing-border">
              <div className="border border-grey border-solid rounded-[12px] m-[0_0_24px_0] flex flex-row justify-center w-[360px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#CC2610] m-[0_4px_0_0] flex flex-row justify-center p-[4px_4.3px_4px_4px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                        Delayed
                        </span>
                      </div>
                      <div className="rounded-[20px] bg-[#CC2610] flex flex-row justify-center p-[4px_4.1px_4px_4px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                        Complaint
                        </span>
                      </div>
                    </div>
                    <div className="m-[1.5px_0_1.5px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#CC2610] flex flex-row p-[2.5px_9px_2.5px_9px] box-sizing-border">
                        <span className="m-[0_4.3px_0_0] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text,600)] text-[12px] text-[#FFFFFF]">
                        1
                        </span>
                        <img src="https://flagsweb.com/City_Flags/SVG/Flag_of_Maastricht.svg" className="rounded-[0.5px] m-[1.5px_0_1.5px_0] w-[12px] h-[12px]" />
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_7.5px_8px_0] inline-block w-[241.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[341.4px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <div className="m-[0.7px_0_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </div>
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[344px] box-sizing-border">
                    <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[344px] h-[fit-content] box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                      View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_24px_0] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] box-sizing-border">
                <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                      <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                        <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                      </div>
                      <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                      Rajesh
                      </div>
                      <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-[#00A441] m-[0_4px_0_0] flex flex-row justify-center p-[4px_8.3px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                      On - Time
                      </span>
                    </div>
                    <div className="rounded-[20px] bg-[#CC2610] flex flex-row justify-center p-[4px_4.1px_4px_4px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                      Complaint
                      </span>
                    </div>
                  </div>
                  <div className="m-[1.5px_0_1.5px_0] flex flex-row justify-center box-sizing-border">
                    <div className="rounded-[20px] bg-[#00A441] flex flex-row p-[2.5px_8px_2.5px_8px] box-sizing-border">
                      <span className="m-[0_4.8px_0_0] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text,600)] text-[12px] text-[#FFFFFF]">
                      5
                      </span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Stellaland.svg" className="rounded-[0.5px] m-[1.5px_0_1.5px_0] w-[12px] h-[12px]" />
                    </div>
                  </div>
                </div>
                <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                  <div className="m-[0_7.5px_8px_0] inline-block w-[253.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                  Routine Cleaning
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                    Guest Task
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[341.4px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                      <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                     21 Jul 2024 | 03:00 am
                    </div>
                  </div>
                  <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                    # 68988
                    </span>
                  </div>
                </div>
                <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    From:Pantry
                    </span>
                  </div>
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    To:Reception
                    </span>
                  </div>
                </div>
                <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[344px] box-sizing-border">
                  <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[344px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                    View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_24px_0] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] box-sizing-border">
                <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                      <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                        <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                      </div>
                      <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                      Rajesh
                      </div>
                      <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                      </div>
                    </div>
                    <div className="rounded-[20px] bg-[#00A441] m-[0_4px_0_0] flex flex-row justify-center p-[4px_8.3px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                      On - Time
                      </span>
                    </div>
                    <div className="rounded-[20px] bg-[#CC2610] flex flex-row justify-center p-[4px_4.1px_4px_4px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                      Complaint
                      </span>
                    </div>
                  </div>
                  <div className="m-[1.5px_0_1.5px_0] flex flex-row justify-center box-sizing-border">
                    <div className="rounded-[20px] bg-[#00A441] flex flex-row p-[2.5px_8px_2.5px_8px] box-sizing-border">
                      <span className="m-[0_4.8px_0_0] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text,600)] text-[12px] text-[#FFFFFF]">
                      5
                      </span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Stellaland.svg" className="rounded-[0.5px] m-[1.5px_0_1.5px_0] w-[12px] h-[12px]" />
                    </div>
                  </div>
                </div>
                <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                  <div className="m-[0_7.5px_8px_0] inline-block w-[253.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                  Routine Cleaning
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                    Guest Task
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[341.4px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                      <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                     21 Jul 2024 | 03:00 am
                    </div>
                  </div>
                  <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                    # 68988
                    </span>
                  </div>
                </div>
                <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    From:Pantry
                    </span>
                  </div>
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    To:Reception
                    </span>
                  </div>
                </div>
                <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[344px] box-sizing-border">
                  <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[344px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                    View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_24px_0] flex flex-col p-[8px_8px_8px_8px] w-[fit-content] box-sizing-border">
                <div className="m-[0_0_12px_0] flex flex-row self-start w-[fit-content] box-sizing-border">
                  <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                    <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                      <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                    </div>
                    <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                    Rajesh
                    </div>
                    <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-[#CC2610] flex flex-row justify-center p-[4px_4.3px_4px_4px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                    Delayed
                    </span>
                  </div>
                </div>
                <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                  <div className="m-[0_7.5px_8px_0] inline-block w-[253.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                  Routine Cleaning
                  </div>
                  <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_8.8px_4px_8px] box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#DC5B19]">
                    Guest Task
                    </span>
                  </div>
                </div>
                <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[341.4px] box-sizing-border">
                  <div className="flex flex-row box-sizing-border">
                    <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                      <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                     21 Jul 2024 | 03:00 am
                    </div>
                  </div>
                  <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                    # 68988
                    </span>
                  </div>
                </div>
                <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    From:Pantry
                    </span>
                  </div>
                  <div className="flex flex-row justify-center box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                    To:Reception
                    </span>
                  </div>
                </div>
                <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[344px] box-sizing-border">
                  <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[344px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                    View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="border border-grey border-solid rounded-[12px] flex flex-row justify-center w-[360px] box-sizing-border">
                <div className="rounded-[12px] border-[0.5px_solid_#B8B8B8] bg-[#FFFFFF] flex flex-col items-center p-[8px_8px_8px_8px] w-[360px] h-[fit-content] box-sizing-border">
                  <div className="m-[0_0_12px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="rounded-[4px] bg-[#F7F7F7] m-[1.5px_4px_1.5px_0] flex flex-row p-[2px_4px_2px_4px] box-sizing-border">
                        <div className="rounded-[2px] bg-[#FFFFFF] m-[0_5px_0_0] flex flex-row justify-center p-[2px_2px_2px_2px] w-[16px] h-[16px] box-sizing-border">
                          <img src="https://w7.pngwing.com/pngs/938/934/png-transparent-fork-spoon-cloth-napkins-fork-plate-logo-vector-icons-thumbnail.png" className="w-[12px] h-[12px]" />
                        </div>
                        <div className="m-[0.5px_5.1px_0.5px_0] inline-block break-words font-['Encode_Sans_Expanded'] font-[var(--desktop-text-title-small,600)] text-[12px] text-[#1A0A02]">
                        Rajesh
                        </div>
                        <div className="rounded-[4px] bg-[#CC2610] m-[4px_0_4px_0] w-[8px] h-[8px]">
                        </div>
                      </div>
                      <div className="rounded-[20px] bg-[#CC2610] m-[0_4px_0_0] flex flex-row justify-center p-[4px_4.3px_4px_4px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                        Delayed
                        </span>
                      </div>
                      <div className="rounded-[20px] bg-[#CC2610] flex flex-row justify-center p-[4px_4.1px_4px_4px] box-sizing-border">
                        <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#FFFFFF]">
                        Complaint
                        </span>
                      </div>
                    </div>
                    <div className="m-[1.5px_0_1.5px_0] flex flex-row justify-center box-sizing-border">
                      <div className="rounded-[20px] bg-[#CC2610] flex flex-row p-[2.5px_9px_2.5px_9px] box-sizing-border">
                        <span className="m-[0_4.3px_0_0] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text,600)] text-[12px] text-[#FFFFFF]">
                        1
                        </span>
                        <img src="https://flagsweb.com/City_Flags/SVG/Flag_of_Maastricht.svg" className="rounded-[0.5px] m-[1.5px_0_1.5px_0] w-[12px] h-[12px]" />
                      </div>
                    </div>
                  </div>
                  <div className="m-[0_0_13.3px_0] flex flex-row justify-between w-[344px] box-sizing-border">
                    <div className="m-[0_7.5px_8px_0] inline-block w-[241.5px] break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#1A0A02]">
                    Routine Cleaning
                    </div>
                    <div className="rounded-[20px] bg-[#F7F7F7] flex flex-row justify-center p-[4px_9px_4px_8px] box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--text-desktop-hint,500)] text-[12px] text-[#5F69C7]">
                      Internal Task
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_0.6px_13.3px_2px] flex flex-row justify-between w-[341.4px] box-sizing-border">
                    <div className="flex flex-row box-sizing-border">
                      <div className="m-[0_7px_0_0] flex flex-row justify-center w-[12px] h-[13.3px] box-sizing-border">
                        <img src="https://cdn5.vectorstock.com/i/1000x1000/51/09/calendar-icon-vector-22895109.jpg" className="w-[12px] h-[13.3px]" />
                      </div>
                      <div className="m-[0.7px_0_0.7px_0] inline-block break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                       21 Jul 2024 | 03:00 am
                      </div>
                    </div>
                    <div className="m-[0.7px_0_0.7px_0] flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Montserrat'] font-[var(--texthint-text-1,500)] text-[10px] text-[#767676]">
                      # 68988
                      </span>
                    </div>
                  </div>
                  <div className="m-[0_1px_12px_0] flex flex-row justify-between w-[343px] box-sizing-border">
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      From:Pantry
                      </span>
                    </div>
                    <div className="flex flex-row justify-center box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--textsecondary-title-text-1,600)] text-[12px] text-[#767676]">
                      To:Reception
                      </span>
                    </div>
                  </div>
                  <div className="border border-[#5F69C7] border-solid rounded-[20px] flex flex-row justify-center w-[344px] box-sizing-border">
                    <div className="rounded-[20px] border-[1px_solid_#5F69C7] flex flex-row justify-center p-[7px_0.9px_7px_0] w-[344px] h-[fit-content] box-sizing-border">
                      <span className="break-words font-['Encode_Sans_Expanded'] font-[var(--buttonbutton-text-secondary,500)] text-[12px] text-[#5F69C7]">
                      View Details
                      </span>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default TaskCard;
