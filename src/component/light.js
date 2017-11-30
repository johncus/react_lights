import React, { Component } from 'react';

class Light extends Component {
    // Three Colors that app wil cycle through;
    colors = ['green', 'yellow', 'red'];
    constructor() {
        super();
        this.state={ bgCol: this.colors[0], colorIndex : 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        var newIndex;
        if (this.state.colorIndex >= this.colors.length-1) {
            newIndex = 0;
        } else {
            newIndex = this.state.colorIndex+1;
        }
        this.setState({colorIndex: newIndex, bgCol: this.colors[newIndex]});
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick }
                    style={{ backgroundColor: this.state.bgCol }}>
                    Click Me
                </button>
            </div>
        )
    }
}
export default Light;