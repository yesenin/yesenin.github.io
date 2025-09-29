import { useDispatch } from "react-redux";
import HyWordTable from "./HyWordTable";
import type { DataSetItem } from "../../types";
import { useEffect, useState } from "react";

import './HyWords.css';
import { useGetWordsQuery } from "../../services/graphqlApi";

function HyWords() {
    const { data, isLoading, isError } = useGetWordsQuery();

    const [originalDataSet, setOriginalDataSet] = useState<DataSetItem[]>([]);
    const [filteredData, setFilteredData] = useState<DataSetItem[]>([]);
    const [searchQuery, setSearchQueryState] = useState<string>("");

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQueryState(value);
        if (value === "") {
            setFilteredData(originalDataSet);
        } else {
            setFilteredData(originalDataSet.filter(item => item.value.toLowerCase().includes(value.toLowerCase())
                || item.translation.toLowerCase().includes(value.toLowerCase())));
        }
    }

    useEffect(() => {
        if (data && data.words && data.words.length > 0) {
            setOriginalDataSet(data.words);
            setFilteredData(data.words);
        }
    }, [data]);

    useEffect(() => {
        window.document.title = "Армянский язык";
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading words</div>;
    }

    return (
        <div className="hy-landing">
            <div>
                <input id="search"
                    name="search"
                    className="hy-big-input"
                    type="text"
                    placeholder="Поиск..."
                    value={searchQuery} 
                    onChange={search}
                    autoComplete="off" />
                
            </div>
            { !filteredData || filteredData.length === 0 
                ? <div>Нет слов.</div>
                : <HyWordTable items={filteredData} />
            }
        </div>
    )
}

export default HyWords;