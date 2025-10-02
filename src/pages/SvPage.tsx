import { Provider } from "react-redux";
import SvContainer from "../components/sv/SvContainer";
import { store } from "../store/SvStore";

function SvPage() {
    return <Provider store={store}><SvContainer /></Provider>;
}
export default SvPage;