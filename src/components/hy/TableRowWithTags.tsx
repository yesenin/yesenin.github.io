import PlayIcon from "./PlayIcon";
import { TableRowProps } from "./TableRow";


const TableRowWithTags = ({ item, onPlayClick }: TableRowProps) => {
    return (
        <tr>
            <td>
                <div className="word-cell">
                    <div>
                        <span className="hy-content">
                            {item.value}
                        </span>
                        <PlayIcon onClick={() => {onPlayClick(item.speechUrl);}} />
                    </div>
                    <div>
                        <span>
                            <a href={`https://en.wiktionary.org/wiki/${item.value}`} target="_blank" rel="noopener noreferrer">wiki</a>
                        </span>
                    </div>
                </div>
                
            </td>
            <td>
                <span>{item.translation}</span>
            </td>
        </tr>
    );
}

export default TableRowWithTags;