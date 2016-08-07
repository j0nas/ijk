import React, {Component} from 'react';
import Message from './Message';
import Question from './Question';

import "./style.css";

class App extends Component {
    constructor() {
        super();
        this.state =  {
            messages: [
                {msg: "Hello", incoming: false},
                {msg: "Hi!", incoming: true},
                {msg: "How are you doing?", incoming: false},
            ]
        }
    }

    addAnswer(answer) {
        console.log(answer);
        document.getElementById("question-question").style.display = "none";

        const messages2 = this.state.messages;
        messages2.push({msg: answer, incoming: false});
        this.setState({messages: messages2});
    }

    render() {
        return (
            <div className="App">
                <div className="msg-contain" id="messages-contain">
                    {this.state.messages.map(message =>
                        <Message msg={message.msg} incoming={message.incoming} key={message.msg} />)}
                    <Question
                        id="question-question"
                        onClick={(answer) => this.addAnswer(answer)}
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
    }
}

export default App;
