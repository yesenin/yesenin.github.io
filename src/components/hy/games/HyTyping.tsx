import { useEffect, useState } from "react";
import { adjectives, nouns, WordToLearn } from ".";
import _, { set } from "lodash";


const allWords = [...adjectives, ...nouns];

function HyTyping() {
    const [currentWord, setCurrentWord] = useState<WordToLearn | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [hintCount, setHintCount] = useState(2);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const randomWord = _.sample(allWords);
        if (randomWord) {
            setCurrentWord(randomWord);
        }
    }, []);

    const handleHint = () => {
        if (hintCount > 0) {
            setCurrentIndex(currentIndex + 1);
            setUserInput(userInput + currentWord?.value.charAt(currentIndex));
        } else {
            alert("No more hints available.");
        }
    };

    const handleSubmit = () => {
        if (userInput.toLowerCase() === currentWord?.value.toLowerCase()) {
            setScore(score + 1);
        } else {
            alert("Incorrect!");
        }
        const randomWord = _.sample(allWords);
        if (randomWord) {
            setCurrentWord(randomWord);
            setCurrentIndex(0);
            setHintCount(2);
            setUserInput("");
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        } else if (e.key === "Backspace") {
            setCurrentIndex(currentIndex - 1);
            setUserInput(userInput.slice(0, -1));
        } else if (currentWord) {
            if (currentWord.value.toLowerCase()[currentIndex] === e.key.toLowerCase()) {
                setCurrentIndex(currentIndex + 1);
                setUserInput(userInput + e.key);
            }
        }
    };

    return (
        <div>
            <h1>HyTyping Game</h1>
            {currentWord && (
                <>
                    <div>
                        <h3>Current Score: {score}</h3>
                    </div>
                    <div>
                        <p>Translate this word: {currentWord.answer}</p>
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder="Type your answer here..."
                            onKeyDown={handleKeyDown}
                            value={userInput}
                            onChange={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div>
                        <button onClick={handleHint}>Hint</button>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default HyTyping;