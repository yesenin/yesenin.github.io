import { Link, Outlet } from "react-router";
import "./HyContainer.css";

function HyContainer() {
    return (
        <div className="container">
            <div className="hy-header">
                <span className="hy-caption gradient-text"><Link to='/hy' className="silent-link">Армянский язык</Link></span>
                <span className="hy-sub-caption">языковые тренажеры от Есенина Антона</span>
            </div>
            <div className="hy-nav-bar">
                <span><Link to="/hy/words" className="silent-link">Словарь</Link></span>
                <span><Link to="/hy/games" className="silent-link">Игры</Link></span>
                {/* <span><Link to="/hy/cards" className="silent-link">Карточки</Link></span> */}
            </div>
            <Outlet />
        </div>
    );
}

export default HyContainer;