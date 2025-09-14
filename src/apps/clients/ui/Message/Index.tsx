import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import "./style.css";

export const Message = ({ message }) => {
    const [close, setClose] = useState(false);

    useEffect(() => {
        setClose(false);
    }, [message.text]);

    if (close) return null;
    if (!message.text) return null;

    const handleClick = () => setClose(true);

    return <span className={"message " + message.status}>
        <span>{message.text}</span>
        <CloseIcon fontSize="small" onClick={handleClick} className="close-message-icon" />
    </span>
}
