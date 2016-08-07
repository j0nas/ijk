import React from 'react';
import Message from './Message';
import Question from './Question';

import "./style.css";

const App = () => (
    <div className="App">
        <div className="msg-contain">
            <Message msg="Hello!" incoming={true}/>
            <Message msg="Hi!" incoming={false}/>
            <Message msg="How are you doing?" incoming={false}/>
            <Question
                msg="Fine, thanks! hbu?"
                answers={
                    ["fine",
                    "great!",
                    "i'm kinda worried about the upcoming robot uprising"]
                }
            />
        </div>
    </div>
);

export default App;
