import { useDispatch, useSelector } from "react-redux";
import HyWordTable from "./HyWordTable";
import type { DataSetItem } from "../../types";
import { useEffect, useState } from "react";
import { setSearchQuery } from "../../store/WordsSlice";

import './HyWords.css';

function HyWords() {
    const dispatch = useDispatch();
    const originalDataSet: DataSetItem[] = useSelector((state: any) => state.words.dataSet);
    const currentArea = useSelector((state: any) => state.words.currentArea);

    const [filteredData, setFilteredData] = useState<DataSetItem[]>([]);
    const searchQuery = useSelector((state: any) => state.words.searchQuery);

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(setSearchQuery(value));
        if (value === "") {
            setFilteredData(originalDataSet);
        } else {
            setFilteredData(originalDataSet.filter(item => item.hy.toLowerCase().includes(value.toLowerCase())
                || item.ru.toLowerCase().includes(value.toLowerCase())));
        }
    }

    useEffect(() => {
        if (originalDataSet.length > 0) {
            setFilteredData(originalDataSet);
        }
    }, [originalDataSet]);

    useEffect(() => {
        window.document.title = "Армянский язык";
    }, []);

    const filterForArea = (): DataSetItem[] => {
        if (currentArea === "all") {
            return filteredData;
        }
        return filteredData.filter(item => item.kind === currentArea);
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
                : <HyWordTable items={filterForArea()} area={currentArea} />
            }
        </div>
    )
}

export default HyWords;