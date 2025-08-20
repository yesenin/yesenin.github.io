import { Link, Outlet } from "react-router";
import "./HyContainer.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataSet } from "../../store/WordsSlice";
import HyWords from "./HyWords";

function HyContainer() {
    const dispatch = useDispatch();

    const fetchWords = () => fetch("https://gist.githubusercontent.com/yesenin/e14d0e4bf09e948ca56bc18ecbc52dfd/raw/6679aec3da29bc25da2358154c465aa7ff0d1067/hy_words.json")
        .then(res => res.json())
        .then(data => data.items);

    const { data: wordsData, isLoading: wordsIsLoading, error: wordsError } = useQuery({
        queryKey: ['words'],
        queryFn: fetchWords,
        staleTime: 30_000,
        placeholderData: (prev) => prev,            // keep previous data during refetch
    });

    useEffect(() => {
        if (wordsData) {
            dispatch(setDataSet(wordsData));
        }
    }, [wordsData, dispatch]);


    if (wordsIsLoading) {
        return <div>Loading...</div>;
    }

    if (wordsError) {
        return <div>Error loading words</div>;
    }

    return (
        <div className="container">
            <div className="hy-header">
                <span className="hy-caption gradient-text"><Link to='/hy' className="silent-link">Армянский язык</Link></span>
            </div>
            <HyWords />
        </div>
    );
}

export default HyContainer;