import React from 'react';
import Message from './Message';

import "./style.css";

const App = () => (
    <div className="App">
        <div className="msg-contain">
            <Message msg="Hello!" incoming={true}/>
            <Message msg="Hi!" incoming={false}/>
            <Message msg="How are you doing?" incoming={false}/>
            <Message msg="Fine, thanks! hbu?" incoming={true}/>
        </div>
    </div>
);

export default App;
