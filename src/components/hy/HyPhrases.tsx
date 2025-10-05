import { useRef } from "react";
import { useGetPhrasesQuery } from "../../services/graphqlApi";
import PlayIcon from "./PlayIcon";

function HyPhrases() {
    const {data, error, isLoading} = useGetPhrasesQuery();

    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    const onPlayClick = (url: string) => {
        if (audioRef.current && url) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div className="hy-landing">
            <div className="hy-landing-header">
                <h1>Фразы</h1>
            </div>
            <audio
                ref={audioRef}
                preload="metadata"
                style={{ display: 'none' }} // hidden element
            />
            <ul>
                {data?.phrases.map(phrase => (
                    <li key={phrase.id}>
                        <strong>{phrase.value}</strong> - {phrase.translation} {phrase.speechUrl && <PlayIcon onClick={() => {onPlayClick(phrase.speechUrl);}} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HyPhrases;