import { Outlet } from "react-router-dom";
import NavigationHeader from "../../Components/UI/NavigationHeader";
const HomePresenter = () => {
  return (
    <section className="w-[90%] flex flex-col justify-start items-start">
      <NavigationHeader/>
      <Outlet />
    </section>
  );
};

export default HomePresenter;
