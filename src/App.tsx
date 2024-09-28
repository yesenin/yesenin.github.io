import React from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const App = () => {
    return <div>
        <div>
            <Link to='/calendar'>Calendar</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}

export default App;
