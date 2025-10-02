import { Link, Outlet } from "react-router";

function HyGames() {
    return <div>
        <ul>
            <li><Link to='typing'>Typing Game</Link></li>
            <li><Link to='select'>Select Words Game</Link></li>
            <li><Link to='verb'>Verb Game</Link></li>
        </ul>
        <div>
            <Outlet />
        </div>
    </div>
}

export default HyGames;