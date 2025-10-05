import { useEffect, useState } from "react";
import { useGetWordsQuery } from "../../services/graphqlApi";
import _ from "lodash";

import './HyRandomWord.css';

function HyRandomWord() {
    const { data } = useGetWordsQuery();

    const [word, setWord] = useState<string | null>(null);

    useEffect(() => {
        refreshWord();
    }, [data]);

    const refreshWord = () => {
        if (data) {
            setWord(_.sample(data.words)?.value || null);
        }
    };

    return <div className="random-word-container"><span className="hy-content">{word}</span>
    <button type="button" onClick={refreshWord}>Еще</button>
    </div>;
}

export default HyRandomWord;