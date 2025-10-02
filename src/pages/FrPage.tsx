import { Provider } from "react-redux";
import FrContainer from "../components/fr/FrContainer";
import { store } from "../store/FrStore";

function FrPage() {
    return <Provider store={store}><FrContainer /></Provider>;
}
export default FrPage;