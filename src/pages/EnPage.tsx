import { Provider } from "react-redux";
import EnContainer from "../components/en/EnContainer";
import { store } from "../store/EnStore";

function EnPage() {
    return <Provider store={store}><EnContainer /></Provider>;
}
export default EnPage;