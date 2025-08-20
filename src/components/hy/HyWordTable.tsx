import "./HyWordTable.css";
import type { DataSetItem } from "../../types";
import TableRow from "./TableRow";
import _ from "lodash";
import KindPane from "./KindPane";
import TableRowWithTags from "./TableRowWithTags";

interface HyWordTableProps {
    items: DataSetItem[];
    area?: string;
}

function HyWordTable(props: HyWordTableProps) {
    const { items, area } = props;

    return (
        <>
            <KindPane />
            <div>
                <p>Всего записей: {items.length}</p>
            </div>
            <div className="hy-landing-content">
                <table className="hy-table">
                    <tbody>
                        {_.sortBy(items, ['hy']).map(item => (
                            area === "all" ? <TableRow key={item.id} item={item} /> : <TableRowWithTags key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HyWordTable;