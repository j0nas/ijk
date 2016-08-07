import React, {Component} from 'react';
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
                <div className="answers">
                    <Answer msg={this.props.msg} onClick={() => this.clicked()}/>
                </div>
            </div>
        );
    }
}

export default Question;
