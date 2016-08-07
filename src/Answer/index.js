import React from 'react';

import '../Message/style.css';
import "./style.css";

const Answer = (props) => (
    <div className="answer-wrapper">
        <div className="message answer" onClick={() => props.onClick(props.msg)}>
            {props.msg}
        </div>
    </div>
);

export default Answer;
