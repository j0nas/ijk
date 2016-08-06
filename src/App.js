import React from 'react';
import MessageBubble from './MessageBubble';

import "./style.css";

const App = () => (
    <div className="App">
        <div className="msg-contain">
            <MessageBubble msg="Hello!" incoming={true}/>
            <MessageBubble msg="Hi!" incoming={false}/>
        </div>
    </div>
);

export default App;
