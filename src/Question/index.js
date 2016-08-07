import React, {Component} from 'react';
import Message from '../Message';
import Answer from '../Answer';

class Question extends Component {
    constructor(props) {
        super(props);
        this.customId = Math.random() * 1000;
    }

    clicked() {
        document.getElementById(this.customId).style.display = "none";
        this.props.onClick();
    }

    render() {
        return (
            <div id={this.customId}>
                <Message msg={this.props.msg} incoming={true}/>
                <div className="answers">
                    {this.props.answers ?
                        this.props.answers.map(answer => <Answer msg={answer} key={answer} onClick={this.props.onClick}/>)
                        : <Answer msg={this.props.msg} onClick={() => this.clicked()}/>
                    }
                </div>
            </div>
        );
    }
}

export default Question;
