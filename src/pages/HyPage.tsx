import { Provider } from "react-redux";
import { store } from "../store/YesenianStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./HyPage.css";
import HyContainer from "../components/hy/HyContainer";

const qc = new QueryClient();

function HyPage() {

    return (
        <Provider store={store}>
            <QueryClientProvider client={qc}>
                <HyContainer />
            </QueryClientProvider>
        </Provider>
    );
}

export default HyPage;