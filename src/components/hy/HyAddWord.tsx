import { useState } from "react";
import { useAddWordMutation } from "../../services/graphqlApi";

function HyAddWord() {
    const [value, setValue] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [kind, setKind] = useState<string>('');
    const [tags, setTags] = useState<string>('');

    const [addWordMutation] = useAddWordMutation();

    const addWord = () => {
        addWordMutation({ value, translation, kind, tags: tags.split(',').map(tag => tag.trim()) });
        setValue('');
        setTranslation('');
        setTags('');
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
                    <option value="postposition">Послелог</option>
                    <option value="conjunction">Союз</option>
                    <option value="numeral">Числительное</option>
                    <option value="phrase">Фраза</option>
                </select>
                <input type="text" name="tags" placeholder="Теги (через запятую)" />
                <button type="submit" onClick={() => addWord()}>Добавить слово</button>
            </div>
        </div>
    );
}

export default HyAddWord;