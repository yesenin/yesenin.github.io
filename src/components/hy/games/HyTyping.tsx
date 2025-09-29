import { useEffect, useRef, useState } from "react";
import { ResultItem, WordEntity } from ".";
import _, { set } from "lodash";
import { gql } from "@apollo/client";

import './HyTyping.css';
import TypingHistory from "./TypingHistory";

interface WordStats {
    word: string;
    lastShown: Date;
    correct: number;
    shown: number;
}

const endpoint = "https://graphqlzero.almansi.me/api"; // GraphQL API endpoint

// GraphQL query to fetch all adjectives
const get_all_adjectives = gql`
query {
  words(kind: "adjective") { id, value, translation, speechUrl }
}
`;

// GraphQL query to fetch all nouns
const get_all_nouns = gql`
query {
  words(kind: "noun") { id, value, translation, speechUrl }
}
`;


function HyTyping() {
    // const { loading: adjective_loading, error: adjective_error, data: adjective_data } = useQuery(get_all_adjectives, { pollInterval: 6000 });
    // const { loading: noun_loading, error: noun_error, data: noun_data } = useQuery(get_all_nouns);

/*     const [nounList, setNounList] = useState<WordEntity[]>([]);
    const [adjectiveList, setAdjectiveList] = useState<WordEntity[]>([]);
    const [verbList, setVerbList] = useState<WordEntity[]>([]); */

    const [roundWordList, setRoundWordList] = useState<WordEntity[]>([]);

    const [currentWord, setCurrentWord] = useState<WordEntity | undefined>(undefined);
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

    const [numberNouns, setNumberNouns] = useState(10);
    const [numberAdjectives, setNumberAdjectives] = useState(10);
    const [numberVerbs, setNumberVerbs] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSpeech = (url: string) => {
        if (audioRef.current && url) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    }

/*     useEffect(() => {
        Promise.all([
            fetch('https://yesenian-word-function.azurewebsites.net/api/words/hy/adjective'),
            fetch('https://yesenian-word-function.azurewebsites.net/api/words/hy/noun')
        ]).then((responses) => Promise.all(responses.map(res => res.json())))
        .then(([adjectives, nouns]) => {
            setNounList(nouns);
            setAdjectiveList(adjectives);
        });
    }, []); */

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
        const leftWords = [];
        // не нужны слова, которые показали 3 раза и хотя бы один раз ответили правильно
        const skipWords = roundStats.filter(rs => rs.shown > 2 && rs.correct > 0).map(rs => rs.word);
        if (skipWords.length === 0) {
            const availableWords: WordEntity[] = [
            // ...nont_data.slice(0, numberNouns), 
            //...adjective_data.words.slice(0, numberAdjectives),
            // ...verbList.slice(0, numberVerbs)
            ];
            setRoundWordList(availableWords);
            leftWords.push(...availableWords);
        } else {
            leftWords.push(...roundWordList.filter(word => !skipWords.includes(word.value)));
        }
        if (leftWords.length === 0) {
            setRoundIsActive(false);
            return null;
        }

        var nextWord = _.sample(leftWords);
        if (nextWord) {
            setCurrentWord(nextWord);
            setCurrentIndex(0);
            setHintCount(2);
            setUserInput("");
            setTypos(0);
        } else {
            setRoundIsActive(false);
        }
        
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
            playSpeech(currentWord.speechUrl);
        } else {
            addStatRecord(currentWord?.value || "", false);

            setHistory([{
                word: currentWord?.value || "",
                correct: false,
                typos: typos
            }, ...history]);
        }
        getNext();
        inputRef.current?.focus();
    }

    const handleSkip = () => {
        addStatRecord(currentWord?.value || "", false);

        getNext();
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
                <h1>Игра про печатанье</h1>
                <button onClick={() => {
                    setRoundIsActive(true);
                    getNext();
                }}>Начать раунд</button>
            </div>
        );
    }

    return (
        <div>
            {currentWord && (
                <div className="typing-wrapper">
                    <div className="game-wrapper">
                        <div>
                            <h3>Current Score: {score}</h3>
                        </div>
                        <div>
                            <h2>{currentWord.translation}</h2>
                            <p>{currentIndex} / {currentWord.value.length}</p>
                            <p>Hints left: {hintCount}</p>
                            <p>Typos: {typos}</p>
                            <audio
                                ref={audioRef}
                                preload="metadata"
                                style={{ display: 'none' }} // hidden element
                            />
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default HyTyping;