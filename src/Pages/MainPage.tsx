// import MobileFooter from "../components/MobileFooter";
// import MobileHeader from "../components/MobileHeader";
import SideNav from "../components/SideNav";
import TaskCard from "../components/TaskCard";
import TopNav from "../components/TopNav";


function MainPage() {
  return (
    <>
      {/* <MobileHeader/> */}
      <TopNav/>
      <div className="flex">   
      <SideNav/>
      <TaskCard/>
    </div>
    {/* <MobileFooter/> */}
    </>
  );
}

export default MainPage;
