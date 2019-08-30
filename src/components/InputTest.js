import React, { Component } from 'react'
import InputComponent from './InputComponent'

export default class InputTest extends Component {
    state = {
        inputArr: []
    }

    handleRemove = (id) => {
        let arr = [...this.state.inputArr].filter(el => el !== id);

        if (id === 47 && arr.includes(48))
            arr = arr.filter(el => el !== 48)

        this.setState({
            inputArr: arr
        })
    }

    handleAdd = (id) => {
        const arr = [...this.state.inputArr, id];

        if (id === 48 && !arr.includes(47)) arr.push(47);

        this.setState({
            inputArr: arr
        })
    }

    handleChange = (id, status) => {
        status ? this.handleRemove(id) : this.handleAdd(id)
    }



    render() {
        const { inputArr } = this.state;
        return (
            <div>
                <h1>Teste de input</h1>
                <InputComponent status={inputArr.includes(47)} name="47" change={this.handleChange} />
                <InputComponent status={inputArr.includes(48)} name="48" change={this.handleChange} />
            </div>
        )
    }
}
