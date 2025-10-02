import { useSelector } from "react-redux";
import { RootState } from "../../store/SvStore";

function SvContainer() {
    const words = useSelector((state: RootState) => state.sv.words);

    return <div style={{background: '#040816ff', height: '100vh', padding: '20px'}}>
        <h1 style={{color: '#7fe280ff'}}>Svenska sidan</h1>
        <ul style={{color: '#fefefe'}}>
            {words.map((word) => (
                <li key={word.id}>{word.value}</li>
            ))}
        </ul>
    </div>;
}

export default SvContainer;
