import { useState } from "react";
import { useAddWordMutation } from "../../services/graphqlApi";

function HyAddWord() {
    const [value, setValue] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [kind, setKind] = useState<string>('');

    const [addWordMutation] = useAddWordMutation();

    const addWord = () => {
        addWordMutation({ value, translation, kind });
    };

    return (
        <div>
            HyAddWord
            <div>
                <input type="text" name="value" placeholder="Слово" value={value} onChange={(e) => setValue(e.target.value)} />
                <input type="text" name="translation" placeholder="Перевод" value={translation} onChange={(e) => setTranslation(e.target.value)} />
                <select value={kind} onChange={(e) => setKind(e.target.value)}>
                    <option value="noun">Существительное</option>
                    <option value="verb">Глагол</option>
                    <option value="adjective">Прилагательное</option>
                    <option value="adverb">Наречие</option>
                    <option value="pronoun">Местоимение</option>
                    <option value="preposition">Предлог</option>
                    <option value="conjunction">Союз</option>
                    <option value="numeral">Числительное</option>
                </select>
                <button type="submit" onClick={() => addWord()}>Добавить слово</button>
            </div>
        </div>
    );
}

export default HyAddWord;