import React, {Component} from 'react';
import Message from './Message';
import Question from './Question';

import "./style.css";

class App extends Component {
    constructor() {
        super();

        this.messages = [
            {msg: "Hi", incoming: true},
            {msg: "Hello!", incoming: false},
            {msg: "How are you?", incoming: true},
            {msg: "Good!", incoming: false},
            {msg: "How nice.", incoming: true},
            {msg: "Quite.", incoming: false},
            {msg: "kthxbye.", incoming: true},
            {msg: "lol bye", incoming: false},
        ];

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.shiftMessageToState();
    }

    shiftMessageToState(clicked) {
        const message = this.messages.shift();
        const messages = this.state.messages;

        if (clicked) {
            messages[messages.length - 1].isAnswer = true;
        }

        if (!message) {
            return;
        }

        messages.push(message);
        this.setState({messages: messages});


        if (message.incoming) {
            this.shiftMessageToState();
        }
    }

    render() {
        return (
            <div className="App">
                <div className="msg-contain" id="messages-contain">
                    {this.state.messages.map(message =>
                        message.incoming || message.isAnswer ?
                            <Message
                                msg={message.msg}
                                incoming={message.incoming}
                                key={message.msg + Math.random()}
                            /> :
                            <Question
                                msg={message.msg}
                                onClick={() => this.shiftMessageToState(true)}
                                key={message.msg + Math.random()}
                            />
                    )}
                </div>
            </div>
        );
    }
}

export default App;
