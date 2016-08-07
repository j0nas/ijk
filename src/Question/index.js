import React from 'react';
import Message from '../Message';
import Answer from '../Answer';

const Question = (props) => (
    <div>
        <Message msg={props.msg} incoming={true}/>
        <div className="answers" id={props.id}>
            {props.answers.map(answer =>
                <Answer msg={answer} key={answer} onClick={props.onClick}/>)}
        </div>
    </div>
);

export default Question;
