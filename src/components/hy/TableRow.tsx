import { Link } from "react-router";
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
                        <span>
                            <Link to={`${item.id}`}>&#8594;</Link>&nbsp;
                        </span>
                        <span className="hy-content">
                            {item.value}
                        </span>
                        {item.speechUrl && <PlayIcon onClick={() => {onPlayClick(item.speechUrl);}} />}
                        {isMobile && (<div>
                            <span style={{ paddingRight: '4px' }}><i>{item.kind}</i></span>
                            <span>
                                <a href={`https://en.wiktionary.org/wiki/${item.value}`} target="_blank" rel="noopener noreferrer">wiki</a>
                            </span>
                        </div>)}
                    </div>
                    <div>
                        {isMobile
                            ? <span>{item.translation}</span>
                            : <span>
                                <a href={`https://en.wiktionary.org/wiki/${item.value}`} target="_blank" rel="noopener noreferrer">wiki</a>
                            </span>
                        }
                    </div>
                </div>
                
            </td>
            {!isMobile && <>
                <td>
                    <span>{item.translation}</span>
                </td>
                <td>
                    <span><i>{item.kind}</i></span>
                </td>
            </>}
        </tr>
    );
}

export default TableRow;