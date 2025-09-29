import PlayIcon from "./PlayIcon";
import { TableRowProps } from "./TableRow";


const TableRowWithTags = ({ item, onPlayClick }: TableRowProps) => {
    const isMobile = window.innerWidth < 600;

    return (
        <tr>
            <td>
                <div className="word-cell">
                    <div>
                        <span className="hy-content">
                            {item.hy}
                        </span>
                        <PlayIcon onClick={() => {onPlayClick(item.audioUrl);}} />
                    </div>
                    <div>
                        <span>
                            <a href={`https://en.wiktionary.org/wiki/${item.hy}`} target="_blank" rel="noopener noreferrer">wiki</a>
                        </span>
                    </div>
                </div>
                
            </td>
            <td>
                <span>{item.ru}</span>
            </td>
        </tr>
    );
}

export default TableRowWithTags;