import React, { Component } from 'react'

export default class InputComponent extends Component {
    state = {
        status: false
    }

    render() {
        const { status, name, change } = this.props;
        return (
            <div>
                <span>{name}</span>
                <input type="checkbox" checked={status} onChange={()=>change(Number(name), status)} />
                
            </div>
        )
    }
}
