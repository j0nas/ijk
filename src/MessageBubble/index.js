import React from 'react';
import "./style.css";

const MessageBubble = (props) => {
    const type = (props.incoming ? "incoming" : "outgoing");
    return (
        <div className={"messagebubble-wrapper " + (type + "-wrapper")}>
            <div className={"messagebubble " + type}>{props.msg}</div>
        </div>
    );
};

export default MessageBubble;