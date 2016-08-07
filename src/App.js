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
        this.popMessageToState();
    }

    popMessageToState() {
        const message = this.messages.shift();
        if (!message) {
            return;
        }

        const messages = this.state.messages;
        messages.push(message);
        this.setState({messages: messages});
        setTimeout(() => this.popMessageToState(), 1000);
    }

    render() {
        return (
            <div className="App">
                <div className="msg-contain" id="messages-contain">
                    {this.state.messages.map(message =>
                        <Message
                            msg={message.msg}
                            incoming={message.incoming}
                            key={message.msg + Math.random()}/>
                    )}
                </div>
            </div>
        );
    }
}

export default App;
