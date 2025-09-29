import { useParams } from "react-router";

function HyWord() {
    const { id } = useParams();

    return <h2>Слово: {id}.</h2>
}

export default HyWord;