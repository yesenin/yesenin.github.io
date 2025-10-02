import _ from "lodash";
import { useEffect, useState } from "react";
import { useGetWordsQuery } from "../../../services/graphqlApi";
import { DataSetItem } from "../../../types";

function HySelectWords() {
    const { data, error, isLoading } = useGetWordsQuery();  

    const [mode, setMode] = useState<'text' | 'speech'>('speech');

    const [roundWords, setRoundWords] = useState<DataSetItem[]>([]);
    const [options, setOptions] = useState<DataSetItem[]>([]);
    const [answers, setAnswers] = useState<DataSetItem[]>([]);

    useEffect(() => {
        setRound();
    }, [data]);

    const setRound = () => {
        if (data) {
            var nextRoundWords: DataSetItem[] = _.sampleSize(data.words, 3);
            var extraOptions: DataSetItem[] = _.sampleSize(data.words, 3);
            var nextOptions: DataSetItem[] = [...nextRoundWords, ...extraOptions];
            setRoundWords(nextRoundWords);
            setOptions(_.shuffle(nextOptions));
            setAnswers([]);
            setMode(Math.random() > 0.5 ? 'text' : 'speech');
        }
    }

    const moveToAnswer = (item: DataSetItem) => {
        setAnswers([...answers, item]);
    };

    const moveFromAnswer = (item: DataSetItem) => {
        setAnswers(answers.filter(a => a.id !== item.id));
    }

    const checkAnswer = () => {
        const correct = _.difference(roundWords, answers);
        if (correct.length === 0) {
            alert("Правильно!");
            setRound();
        } else {
            alert("Неправильно!");
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    return <div>
        <h2>Выберите слова</h2>
        <div>
            {roundWords.map((word) => (
                mode == 'text' ? <div key={word.id}>{word.translation}</div>
                : <div key={word.id}><audio controls><source src={word.speechUrl} type="audio/mpeg" /></audio></div>
            ))}
        </div>
        <hr />
        <div>
            {answers.map((answer) => (
                <div key={answer.id} onClick={() => moveFromAnswer(answer)}>{mode == 'text' ? answer.value : answer.translation}</div>
            ))}
        </div>
        <button onClick={() => checkAnswer()}>Проверить</button>
        <hr />
        <div>
            {_.difference(options, answers).map((option) => (
                <div key={option.id} onClick={() => moveToAnswer(option)}>{mode == 'text' ? option.value : option.translation}</div>
            ))}
        </div>
    </div>;
}

export default HySelectWords;