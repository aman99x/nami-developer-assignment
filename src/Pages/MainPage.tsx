import SideNav from "../components/SideNav";
import TaskCard from "../components/TaskCard";
import TopNav from "../components/TopNav";


function MainPage() {
  return (
    <>
      <TopNav/>
      <div className="flex">   
      <SideNav/>
      <TaskCard/>
    </div>
    </>
  );
}

export default MainPage;
