import { useEffect, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";

interface PlayIconProps {
    src: string;
}

function PlayIcon({ src }: PlayIconProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleUserPlay = async () => {
        try {
            await audioRef.current?.play();
        } catch {
        }
    }

    return (
        <span>
            <audio
                ref={audioRef}
                src={src}
                preload="metadata"
                style={{ display: 'none' }} // hidden element
            />
            <BsPlayFill onClick={handleUserPlay}/>
        </span>
    );
}

export default PlayIcon;