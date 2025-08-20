import { BsArrowUpRightCircleFill, BsPlayFill } from "react-icons/bs";
import type { DataSetItem } from "../../types";
import { Link } from "react-router-dom";

interface TableRowWithTagsProps {
    item: DataSetItem;
}

const TableRowWithTags = ({ item }: TableRowWithTagsProps) => {
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
                        <span>
                            <BsPlayFill />
                        </span>
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
                {item.tags.map((tag, i) => <span key={i} className="tag"><i>{tag}</i></span>)}
            </td>
        </tr>
    );
}

export default TableRowWithTags;