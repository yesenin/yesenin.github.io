import { useEffect, useRef, useState } from "react";
import { ResultItem, WordToLearn } from ".";
import _, { set } from "lodash";

import './HyTyping.css';
import TypingHistory from "./TypingHistory";

interface WordStats {
    word: string;
    lastShown: Date;
    correct: number;
    shown: number;
}

function HyTyping() {
    const [dataSet, setDataSet] = useState<WordToLearn[]>([]);
    const [currentWord, setCurrentWord] = useState<WordToLearn | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [hintCount, setHintCount] = useState(3);
    const [score, setScore] = useState(0);
    const [typos, setTypos] = useState(0);

    const [history, setHistory] = useState<ResultItem[]>([]);

    const [roundStats, setRoundStats] = useState<WordStats[]>([]);

    const [showStats, setShowStats] = useState(false);
    const [showWordList, setShowWordList] = useState(false);

    const [roundIsActive, setRoundIsActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        Promise.all([
            fetch('https://gist.githubusercontent.com/yesenin/5e3a1f27a38cbc0cf961945772ddb2c8/raw/c230eb71b238529f9031679c46cc97ecc2414668/hy_typing_adj.tsv'),
            fetch('https://gist.githubusercontent.com/yesenin/5e3a1f27a38cbc0cf961945772ddb2c8/raw/c230eb71b238529f9031679c46cc97ecc2414668/hy_typing_noun.tsv')
        ]).then((responses) => Promise.all(responses.map(res => res.text())))
        .then(([adjectives, nouns]) => {
            const adjLines = adjectives.split('\n').slice(0, 50);
            const nounLines = nouns.split('\n').slice(0, 10);
            const newWords: WordToLearn[] = [];
            _.sampleSize(adjLines, 10).forEach(line => {
                const [value, answer] = line.split('\t');
                if (value && answer) {
                    newWords.push({ value: value.trim(), answer: answer.trim() });
                }
            });
            _.sampleSize(nounLines, 10).forEach(line => {
                const [value, answer] = line.split('\t');
                if (value && answer) {
                    newWords.push({ value: value.trim(), answer: answer.trim() });
                }
            });
            setDataSet(newWords);
            const randomWord = _.sample(newWords);
            if (randomWord) {
                setCurrentWord(randomWord);
            }
        });
    }, []);

    const handleHint = () => {
        if (hintCount > 0) {
            setCurrentIndex(currentIndex + 1);
            setUserInput(userInput + currentWord?.value.charAt(currentIndex));
            setHintCount(hintCount - 1);
        } else {
            alert("No more hints available.");
        }
        inputRef.current?.focus();
    };

    const getNext = () => {
        // не нужны слова, которые показали 3 раза и хотя бы один раз ответили правильно
        const skipWords = roundStats.filter(rs => rs.shown > 2 && rs.correct > 0).map(rs => rs.word);
        const availableWords = dataSet.filter(word => !skipWords.includes(word.value));
        if (availableWords.length === 0) {
            setRoundIsActive(false);
            return null;
        }
        return _.sample(availableWords);
    }

    const addStatRecord = (word: string, correct: boolean) => {
        let existedWord: WordStats | undefined = _.find(roundStats, { word: word });
        if (existedWord) {
            existedWord.lastShown = new Date();
            existedWord.correct += correct ? 1 : 0;
            existedWord.shown += 1;
        } else {
            existedWord = {
                word: word,
                lastShown: new Date(),
                correct: correct ? 1 : 0,
                shown: 1
            };
        }
        setRoundStats([...roundStats.filter(rs => rs.word !== word), existedWord]);
    };

    const handleSubmit = () => {
        if (userInput.toLowerCase() === currentWord?.value.toLowerCase()) {
            setScore(score + 1);
            addStatRecord(currentWord.value, true);

            setHistory([{
            word: currentWord?.value || "",
            correct: true,
            typos: typos
        }, ...history]);
        } else {
            addStatRecord(currentWord?.value || "", false);

            setHistory([{
            word: currentWord?.value || "",
            correct: false,
            typos: typos
        }, ...history]);
        }
        const randomWord = getNext();
        if (randomWord) {
            setCurrentWord(randomWord);
            setCurrentIndex(0);
            setHintCount(2);
            setUserInput("");
            setTypos(0);
        }
        inputRef.current?.focus();
    }

    const handleSkip = () => {
        addStatRecord(currentWord?.value || "", false);

        const randomWord = getNext();
        if (randomWord) {
            setCurrentWord(randomWord);
            setCurrentIndex(0);
            setHintCount(2);
            setUserInput("");
            setTypos(0);
        }
        inputRef.current?.focus();
        setHistory([{
            word: currentWord?.value || "",
            correct: false,
            typos: typos
        }, ...history]);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        } else if (e.key === "Backspace") {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setUserInput(userInput.slice(0, -1));
            }
        } else if (currentWord && 'աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևօֆ'.includes(e.key.toLowerCase())) {
            if (currentWord.value.toLowerCase()[currentIndex] === e.key.toLowerCase()) {
                setCurrentIndex(currentIndex + 1);
                setUserInput(userInput + e.key);
            } else {
                setTypos(typos + 1);
            }
        }
    };

    if (!roundIsActive) {
        return (
            <div>
                <h1>HyTyping Game</h1>
                <button onClick={() => setRoundIsActive(true)}>Start Round</button>
            </div>
        );
    }

    return (
        <div>
            <h1>HyTyping Game</h1>
            {currentWord && (
                <div className="typing-wrapper">
                    <div className="game-wrapper">
                        <div>
                            <h3>Current Score: {score}</h3>
                        </div>
                        <div>
                            <h2>{currentWord.answer}</h2>
                            <p>{currentIndex} / {currentWord.value.length}</p>
                            <p>Hints left: {hintCount}</p>
                            <p>Typos: {typos}</p>
                        </div>
                        <div>
                            <input 
                                ref={inputRef}
                                className="big-input"
                                type="text"
                                placeholder="Type your answer here..."
                                onKeyDown={handleKeyDown}
                                value={userInput}
                                onChange={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div>
                            <button onClick={handleHint}>Hint</button>
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={handleSkip}>Skip</button>
                        </div>
                        <div>
                            <TypingHistory items={history} />
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <div>
                            <button onClick={() => setShowStats(!showStats)}>{showStats ? "Hide Stats" : "Show Stats"}</button>
                        </div>
                        {showStats && (
                            <div>
                                <h3>Round Statistics</h3>
                                <pre>
                                    {JSON.stringify(roundStats.map(rs => ({ ...rs, score: rs.shown > 0 ? rs.correct / rs.shown : 0 })), null, 2)}
                                </pre>
                            </div>
                        )}
                        <div>
                            <button onClick={() => setShowWordList(!showWordList)}>{showWordList ? "Hide Word List" : "Show Word List"}</button>
                        </div>
                        {showWordList && (
                            <div>
                                <h3>Word List</h3>
                                <ul>
                                    {dataSet.map((word) => (
                                        <li key={word.value}>{word.value}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HyTyping;