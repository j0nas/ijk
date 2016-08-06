import React from 'react';
import "./style.css";

const Message = (props) => {
    const type = (props.incoming ? "incoming" : "outgoing");
    return (
        <div className={(type + "-wrapper")}>
            <div className={"message " + type}>{props.msg}</div>
        </div>
    );
};

export default Message;