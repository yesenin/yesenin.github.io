import { ResultItem } from ".";
import HistoryItem from "./HistoryItem";

import './TypingHistory.css';

interface TypingHistoryProps {
    items?: ResultItem[];
}
function TypingHistory(props: TypingHistoryProps) {
    return <div className="overlay"><div className="typing-history">
        {props.items?.map((item, index) => (
                <HistoryItem key={index} value={item} />
            ))}
    </div></div>
}

export default TypingHistory;

