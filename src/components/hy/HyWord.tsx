import { Link, useParams } from "react-router";

function HyWord() {
    const { id } = useParams();

    return <div>
        <h2>Слово: {id}.</h2>
        <Link to="/hy/words">Назад.</Link>
        </div>
}

export default HyWord;