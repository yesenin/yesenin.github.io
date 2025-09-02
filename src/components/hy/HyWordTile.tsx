import { cx } from "../../services/ClassNameHelper";

import './HyWordTile.css';

interface HyWordTileProps {
    uiKey: string;
    text: string | null;
    speechUrl: string | null;
    onClick?: () => void;
    selected?: boolean;
    empty?: boolean;
    disabled?: boolean;
}

export default function HyWordTile(props: HyWordTileProps) {
    const { uiKey, text, speechUrl, onClick, selected, disabled, empty} = props;

    return (
        <button className={cx("entry-tile", {"selected": selected, "empty": empty})} onClick={onClick} disabled={disabled}>
            {!empty && <>
                <span className="tile-key">{uiKey}</span>
                    <span className="tile-value">
                    { text ? text : "icon" }
                    { speechUrl && <audio src={speechUrl} controls /> }
                </span>
            </>}
        </button>
    );
}