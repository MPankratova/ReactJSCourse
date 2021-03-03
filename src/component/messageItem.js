import { Avatar } from "@material-ui/core";
import FaceIcon from '@material-ui/icons/Face';
import { useRef } from "react";
import { BOT_NAME } from '../const.js';

function MessageItem(props) {
    const messItemEl = useRef();

    return (
        <div className="message__item">
            <Avatar ref={messItemEl} className={`message__item ${props.author === BOT_NAME ? 'bot' : ''}`}>
                {props.author === BOT_NAME ? <FaceIcon /> : props.author[0]}
            </Avatar>
            <div className="message__body">
                <div className="message__author">
                    {props.author}
                </div>
                <div className="message__text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default MessageItem;