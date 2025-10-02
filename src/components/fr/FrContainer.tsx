import { useSelector } from "react-redux";
import { RootState } from "../../store/FrStore";

function FrContainer() {
    const words = useSelector((state: RootState) => state.fr.words);

    return <div style={{background: '#040816ff', height: '100vh', padding: '20px'}}>
        <h1 style={{color: '#07a1e9ff'}}>Français Page</h1>
        <ul style={{color: '#fefefe'}}>
            {words.map((word) => (
                <li key={word.id}>{word.value}</li>
            ))}
        </ul>
    </div>;
}

export default FrContainer;
