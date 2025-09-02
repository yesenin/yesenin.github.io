import { useDispatch, useSelector } from "react-redux";
import { cx } from "../../services/ClassNameHelper";
import { setCurrentArea } from "../../store/WordsSlice";

interface Area {
    name: string;
    caption: string;
}

const areas: Area[] = [
    {
        name: 'all',
        caption: 'Все'
    },
    {
        name: 'verb',
        caption: 'Глаголы'
    },
    {
        name: 'noun',
        caption: 'Существительные'
    },
    {
        name: 'adjective',
        caption: 'Прилагательные'
    },
    {
        name: 'adjective',
        caption: 'Прилагательные'
    },
    {
        name: 'adverb',
        caption: 'Наречия'
    },
    {
        name: 'pronoun',
        caption: 'Местоимения'
    },
    {
        name: 'conjunction',
        caption: 'Союзы'
    },
    {
        name: 'numeral',
        caption: 'Числительные'
    },
    {
        name: 'phrase',
        caption: 'Фразы'
    }
]

function KindPane() {
    const currentArea = useSelector((state: any) => state.words.currentArea);
    const dispatch = useDispatch();

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