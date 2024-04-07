import BellImage from '../assets/images/bellImage.png';

function TopNav() {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-[0_0_42px_0] w-full max-w-[1440px] box-sizing-border">
      <div className="border-b-[1px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_32px_0] flex flex-row justify-between p-[28px_32px_27px_40px] w-full max-w-[1440px] box-sizing-border">
        <div className="m-[4px_20px_4px_0] inline-block w-full max-w-[1220px] break-words font-['Encode_Sans_Expanded'] font-semibold text-[32px] text-[#1A0A02] text-left">
          ABCHotel
        </div>
        <div className="flex flex-row w-full max-w-[128px] h-[fit-content] box-sizing-border">
          <div className="m-[4px_47.9px_6px_0] flex flex-row justify-center w-full max-w-[32.1px] h-[38px] box-sizing-border">
            {/* Displaying image */}
            <img src={BellImage} alt="BellImage" className="w-full max-w-[32.1px] h-[38px]" />
          </div>
          <div className="rounded-[24px] bg-[url('assets/images/Ellipse185.png')] bg-[50%_50%] bg-cover bg-no-repeat w-full max-w-[48px] h-[48px]">
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
