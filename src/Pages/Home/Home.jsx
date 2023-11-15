import { Outlet } from "react-router-dom";

const HomePresenter = () => {
  return (
    <section className="w-[90%] flex flex-col justify-start items-start">
      <div className="navbar bg-base-100 shadow-lg rounded-xl mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>명소</a>
              </li>
              <li>
                <a>맛집</a>
              </li>
              <li>
                <a>숙박</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-3xl">갈멧길 관광 정보</a>
        </div>
        <div className="navbar-end">
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default HomePresenter;
