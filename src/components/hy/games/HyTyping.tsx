import { useEffect, useRef, useState } from "react";
import { ResultItem, WordEntity } from ".";
import _ from "lodash";
import './HyTyping.css';
import { useGetWordsQuery } from "../../../services/graphqlApi";


const HyTyping: React.FC = () => {
    const { data, isLoading, isError } = useGetWordsQuery();
    
    const [roundWordList, setRoundWordList] = useState<WordEntity[]>([]);

    const [currentWord, setCurrentWord] = useState<WordEntity | undefined>(undefined);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [hintCount, setHintCount] = useState(3);
    const [score, setScore] = useState(0);
    const [typos, setTypos] = useState(0);

    const [history, setHistory] = useState<ResultItem[]>([]);

    const [roundIsActive, setRoundIsActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    
    useEffect(() => {
        if (data && data.words && data.words.length > 0) {
            setRoundWordList(data.words);
        }
    }, [data]);

    const playSpeech = (url: string) => {
        if (audioRef.current && url) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    }

    const handleHint = () => {
        if (hintCount > 0) {
            setCurrentIndex(currentIndex + 1);
            setUserInput(userInput + currentWord?.value.charAt(currentIndex));
            setHintCount(hintCount - 1);
        } else {
            alert("No more hints available.");
        }
        inputRef.current?.focus();
    }

    const getNext = () => {
        var nextWord = _.sample(roundWordList);
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

    const handleSubmit = () => {
        if (userInput.toLowerCase() === currentWord?.value.toLowerCase()) {
            setScore(score + 1);
            setHistory([{
                word: currentWord?.value || "",
                correct: true,
                typos: typos
            }, ...history]);
            playSpeech(currentWord.speechUrl);
        } else {
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
    }

    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading words</div>;
    }

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
                    </div>
                </div>
            )}
        </div>
    );
}

export default HyTyping;