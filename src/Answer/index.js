import React from 'react';

import '../Message/style.css';
import "./style.css";

const Answer = (props) => (
    <div className="answer-wrapper">
        <div className="message answer">
            {props.msg}
        </div>
    </div>
);

export default Answer;
