import React, { Component } from 'react';

class MainPage extends Component {
    state = {
        ipAddress: ["1.8.9.3", "1.6.7.4", "32423"]
    }
    plusIcon = 'Plus';
    minusIcon = 'Minus';
    empty = '';

    render() {
        return (
            <div>
                <div>
                    Saved IP Address
                    {this.state.ipAddress.map((d, idx) => {
                        return (<div> {d} </div>)
                    })}
                </div>
                <div>{this.state.ipAddress.map((d, idx) => {
                    return (<div><input type='text' /> {idx > 0 ? this.plusIcon : this.empty} {idx > 0 ? this.minusIcon : this.empty} </div>)
                })}</div>
            </div>
        );
    };
}

export default MainPage;