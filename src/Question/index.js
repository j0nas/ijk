import React from 'react';
import Message from '../Message';
import Answer from '../Answer';

const Question = (props) => (
    <div>
        <Message msg={props.msg} incoming={true} />
        {props.answers.map(answer => <Answer msg={answer} key={answer}/>)}
    </div>
);

export default Question;
