import { BsArrowUpRightCircleFill } from "react-icons/bs";
import type { DataSetItem } from "../../types";
import { Link } from "react-router-dom";
import PlayIcon from "./PlayIcon";

interface TableRowProps {
    item: DataSetItem;
}

const TableRow = ({ item }: TableRowProps) => {
    return (
        <tr>
            <td>
                <div className="word-cell">
                    <div>
                        <span className="hy-content">
                            {item.hy}
                        </span>
                        <span>
                            <Link to={`/hy/words/${item.id}`}><BsArrowUpRightCircleFill /></Link>
                        </span>
                    </div>
                    <div>
                        <PlayIcon src={item.audioUrl} />
                        <span>
                            <a href={`https://en.wiktionary.org/wiki/${item.hy}`} target="_blank" rel="noopener noreferrer">wiki</a>
                        </span>
                    </div>
                </div>
                
            </td>
            <td>
                <span>{item.ru}</span>
            </td>
            <td>
                <span><i>{item.kind}</i></span>
            </td>
        </tr>
    );
}

export default TableRow;