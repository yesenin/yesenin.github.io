import { useDispatch, useSelector } from "react-redux";
import { cx } from "../../services/ClassNameHelper";
import { setCurrentArea } from "../../store/WordsSlice";

interface Area {
    name: string;
    caption: string;
}

function KindPane() {
    const currentArea = useSelector((state: any) => state.words.currentArea);
    const dispatch = useDispatch();

    const areas: Area[] = [
        {
            name: "all",
            caption: "Все"
        },
        {
            name: "noun",
            caption: "Существительные"
        },
        {
            name: "verb",
            caption: "Глаголы"
        },
        {
            name: "adjective",
            caption: "Прилагательные"
        }
    ];

    return (
        <div className="hy-nav-bar">
            {areas.map(area => <div
                key={area.name}
                className={cx("hy-nav-item", {"selected": currentArea === area.name})}
                onClick={() => dispatch(setCurrentArea(area.name))}>{area.caption}</div>)}
        </div>
    )
}

export default KindPane;