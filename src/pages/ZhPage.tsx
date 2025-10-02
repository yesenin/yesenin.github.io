import { Provider } from "react-redux";
import ZhContainer from "../components/zh/ZhContainer";
import { store } from "../store/ZhStore";

function ZhPage() {
    return <Provider store={store}><ZhContainer /></Provider>;
}
export default ZhPage;