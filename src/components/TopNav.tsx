import BellImage from '../assets/images/bellImage.png';
import EllipseImage from '../assets/images/Ellipse185.png';

function TopNav() {
  return (
    <div className="bg-[#FFFFFF] p-[0_0_42px_0] w-full max-w-[1440px] box-sizing-border">
      <div className="border-b-[1px_solid_#B8B8B8] bg-[#FFFFFF] m-[0_0_32px_0] p-[28px_32px_27px_40px] w-full max-w-[1440px] box-sizing-border flex justify-between items-center">
        <div className="font-['Encode_Sans_Expanded'] font-semibold text-[32px] text-[#1A0A02] text-left">
          ABCHotel
        </div>
        <div className="flex items-center">
          <div className="m-[4px_47.9px_6px_0] flex justify-center w-[38px] h-[38px]">
            <img src={BellImage} alt="BellImage" className="w-full h-full" />
          </div>
          <div className="rounded-full bg-center bg-cover bg-no-repeat w-[48px] h-[48px]">
            <img src={EllipseImage} alt="EllipseImage" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
