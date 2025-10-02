import { useSelector } from "react-redux";
import { RootState } from "../../store/EnStore";

function EnContainer() {
    const words = useSelector((state: RootState) => state.en.words);

    return <div style={{background: '#040816ff', height: '100vh', padding: '20px'}}>
        <h1 style={{color: '#7fe280ff'}}>English Page</h1>
        <ul style={{color: '#fefefe'}}>
            {words.map((word) => (
                <li key={word.id}>{word.value}</li>
            ))}
        </ul>
    </div>;
}

export default EnContainer;