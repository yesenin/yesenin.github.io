import "./HyWordTable.css";
import type { DataSetItem } from "../../types";
import TableRow from "./TableRow";
import _ from "lodash";
import { useRef } from "react";
import { Link } from "react-router";

interface HyWordTableProps {
    items: DataSetItem[];
    area?: string;
}

function HyWordTable(props: HyWordTableProps) {
    const { items } = props;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const onPlayClick = (url: string) => {
        if (audioRef.current && url) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    }

    return (
        <>
            <audio
                ref={audioRef}
                preload="metadata"
                style={{ display: 'none' }} // hidden element
            />
            <div>
                <p>Всего записей: {items.length}. {import.meta.env.VITE_CAN_ADD === 'true' && <Link to="/hy/words/add">Добавить.</Link>}</p>
            </div>
            <div className="hy-landing-content">
                <table className="hy-table">
                    <tbody>
                        {_.sortBy(items, ['value']).map(item => <TableRow key={item.id} item={item} onPlayClick={onPlayClick} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HyWordTable;