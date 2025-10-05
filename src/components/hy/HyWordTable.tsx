import "./HyWordTable.css";
import type { DataSetItem } from "../../types";
import TableRow from "./TableRow";
import _ from "lodash";
import { useRef, useState } from "react";
import { Link } from "react-router";

interface HyWordTableProps {
    items: DataSetItem[];
    area?: string;
}

type WordKinds = 'all' | 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'numeral';

function HyWordTable(props: HyWordTableProps) {
    const [wordKind, setWordKind] = useState<WordKinds>('all');

    const { items } = props;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const onPlayClick = (url: string) => {
        if (audioRef.current && url) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    }

    const getItems = () => {
        const filteredItems = wordKind === 'all' ? items : items.filter(item => item.kind === wordKind);
        return _.sortBy(filteredItems, ['value']);
    }

    return (
        <>
            <audio
                ref={audioRef}
                preload="metadata"
                style={{ display: 'none' }} // hidden element
            />
            <div>
                <select id="wordKind" value={wordKind} onChange={(e) => setWordKind(e.target.value as WordKinds)}>
                    <option value="all">Все</option>
                    <option value="noun">Существительные</option>
                    <option value="verb">Глаголы</option>
                    <option value="adjective">Прилагательные</option>
                    <option value="adverb">Наречия</option>
                    <option value="pronoun">Местоимения</option>
                    <option value="preposition">Предлоги</option>
                    <option value="postposition">Послелоги</option>
                    <option value="conjunction">Союзы</option>
                    <option value="numeral">Числительные</option>
                </select>
            </div>
            <div>
                <p>Всего записей: {getItems().length}. {import.meta.env.VITE_CAN_ADD === 'true' && <Link to="/hy/words/add">Добавить.</Link>}</p>
            </div>
            <div className="hy-landing-content">
                <table className="hy-table">
                    <tbody>
                        {getItems().map(item => <TableRow key={item.id} item={item} onPlayClick={onPlayClick} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HyWordTable;