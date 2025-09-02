import { BsPlayFill } from "react-icons/bs";

interface PlayIconProps {
    onClick?: () => void;
}

function PlayIcon({ onClick }: PlayIconProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <span>
            <BsPlayFill onClick={handleClick}/>
        </span>
    );
}

export default PlayIcon;