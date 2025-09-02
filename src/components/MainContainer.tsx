import { Link, Outlet } from "react-router";

function MainContainer() {
  return (
    <div className="main-container">
        <div>
            <Link to='/'>На главную</Link>
        </div>
      <Outlet />
    </div>
  );
}

export default MainContainer;
