import type { DataSetItem } from "../../types";
import PlayIcon from "./PlayIcon";

export interface TableRowProps {
    item: DataSetItem;
    onPlayClick: (url: string) => void;
}

const TableRow = ({ item, onPlayClick }: TableRowProps) => {
    const isMobile = window.innerWidth < 600;

    return (
        <tr>
            <td className="main-td">
                <div className="word-cell">
                    <div>
                        <span className="hy-content">
                            {item.hy}
                        </span>
                        <PlayIcon onClick={() => {onPlayClick(item.audioUrl);}} />
                        {isMobile && (<div>
                            <span style={{ paddingRight: '4px' }}><i>{item.kind}</i></span>
                            <span>
                                <a href={`https://en.wiktionary.org/wiki/${item.hy}`} target="_blank" rel="noopener noreferrer">wiki</a>
                            </span>
                        </div>)}
                    </div>
                    <div>
                        {isMobile
                            ? <span>{item.ru}</span>
                            : <span>
                                <a href={`https://en.wiktionary.org/wiki/${item.hy}`} target="_blank" rel="noopener noreferrer">wiki</a>
                            </span>
                        }
                    </div>
                </div>
                
            </td>
            {!isMobile && <>
                <td>
                    <span>{item.ru}</span>
                </td>
                <td>
                    <span><i>{item.kind}</i></span>
                </td>
            </>}
        </tr>
    );
}

export default TableRow;