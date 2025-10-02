import { useEffect, useState } from "react";
import { useGetWordsQuery } from "../../../services/graphqlApi";
import { DataSetItem } from "../../../types";

function HyVerbGame() {
    const { data, isLoading, isError } = useGetWordsQuery();

    const [allVerbs, setAllVerbs] = useState<DataSetItem[]>([]);

    useEffect(() => {
        if (data?.words) {
            const verbs = data.words.filter(word => word.kind === 'verb');
            setAllVerbs(verbs);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading words</div>;
    }

    return <div>{allVerbs.length}</div>;
}

export default HyVerbGame;
