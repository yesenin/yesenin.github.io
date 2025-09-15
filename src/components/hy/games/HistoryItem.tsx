import { ResultItem } from '.';
import { cx } from '../../../services/ClassNameHelper';
import './HistoryItem.css';

interface HistoryItemProps {
    value: ResultItem;
}

function HistoryItem(props: HistoryItemProps) {
    const { value } = props;
    return <div className={cx('history-item', { correct: value.correct, incorrect: !value.correct })}>
        <span className='hy-content value'>{value.word}</span>
        <span>Typos: {value.typos}</span>
    </div>
}

export default HistoryItem;
