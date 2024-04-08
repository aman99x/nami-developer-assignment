import { useState, useEffect } from 'react';
import MobileFooter from "../components/MobileFooter";
import MobileHeader from "../components/MobileHeader";
import SideNav from "../components/SideNav";
import TaskCard from "../components/TaskCard";
import TopNav from "../components/TopNav";

function MainPage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 380); 
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('resize', updateMedia);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <MobileHeader/> 
          <TaskCard/>
          <MobileFooter/>
        </>
      ) : (
        <>
          <TopNav/>
          <div className="flex">   
            <SideNav/>
            <TaskCard/>
          </div>
        </>
      )}
    </>
  );
}

export default MainPage;
