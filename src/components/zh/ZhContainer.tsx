import { useSelector } from "react-redux";
import ZhLinks from "./ZhLinks";
import { RootState } from "../../store/ZhStore";

function ZhContainer() {
    const words = useSelector((state: RootState) => state.zh.words);

    return <div style={{background: '#040816ff', height: '100vh', padding: '20px'}}>
        <h1 style={{color: '#07a1e9ff'}}>中文页面</h1>
        <div>
            <ZhLinks />
        </div>
        <ul style={{color: '#fefefe'}}>
            {words.map((word) => (
                <li key={word.id}>{word.value}</li>
            ))}
        </ul>
    </div>;
}   

export default ZhContainer;