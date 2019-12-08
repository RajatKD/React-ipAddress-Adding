import React, { Component } from 'react';
import InputField from '../Containers/InputFields';
import { stat } from 'fs';

class MainPage extends Component {

    state = {
        ipAddress: [],
        inputFields: [{ key: Date.now(), value: '' }],
    }

    onDelete = (key) => {
        console.log("Delete called...");
        if (this.state.inputFields.length !== 1) {
            this.setState({
                inputFields: this.state.inputFields.filter(ele => ele.key !== key)
            });
        }
    }

    onAddInputField = () => {
        if (this.state.inputFields.length < 5) {
            let inputFields = [...this.state.inputFields, { key: Date.now(), value: '' }];
            this.setState({ inputFields: inputFields });
        } 
    }

    changeEvent = (e, key) => {
        console.log('CHANGE EVENT : ', e.target.value, ' key:', key);
        const arr = this.state.inputFields.map(ele => ele.key === key ? { ...ele, value: e.target.value } : ele);
        this.setState({
            inputFields: arr
        });
    }

    save = () => {
        let combinedArr = [...this.state.ipAddress, ...this.state.inputFields];
        this.setState({ ipAddress: combinedArr, inputFields: [{ key: Date.now(), value: '' }] });
        console.log('ipAddress Len : ', this.state.ipAddress.length, ', Input fields : ', this.state.inputFields.length);
    }

    render() {
        const ipFieldsLength = this.state.inputFields.length - 1;
        return (
            <div>
                <div>
                    {this.state.ipAddress.length > 0 ? <p>Saved IP Address </p> : ''}
                    {this.state.ipAddress.map((ele) => {
                        return (<div key={ele.key}> {ele.value} </div>)
                    })}
                </div>
                <div>
                    Enter IP addresses
                    {
                        this.state.inputFields.map((val, idx) =>
                            <InputField
                                key={val.key}
                                unique={val.key}
                                changeEvent={this.changeEvent}
                                add={this.onAddInputField}
                                delete={this.onDelete}
                                val={val.value}
                                showPlus={ipFieldsLength === idx && ipFieldsLength !== 4 ? true : false} />
                        )
                    }
                </div>
                <button onClick={this.save.bind(this)}>Save</button>
                <h4>{this.state.warning}</h4>
            </div>
        );
    };
}

export default MainPage;