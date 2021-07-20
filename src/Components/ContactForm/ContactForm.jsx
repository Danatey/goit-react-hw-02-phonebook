import React, { Component } from "react";
import { nanoid } from 'nanoid';

import Button from '../Button';
import Input from '../Input';

import ButtonEl from './ButtonEl.json';
import InputEl from './InputEl.json';

class ContactForm extends Component {
    state = {
        Name: '',
        Number: '',
    };
    
    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '', });
    };

    render() {
        const { Name, Number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {InputEl.map(({ type, name, pattern, title }) =>
                {
                    const generateID = nanoid();
                    let value
                    if (name === Name) {
                        value=Name
                    }
                    if (name === Number) {
                        value= Number
                    }
                    return (<Input
                        type={type}
                        value={value}
                        name={name}
                        pattern={pattern}
                        title={title}
                        key={name}
                        id={generateID}
                        onChange={this.handleChange}
                        />)
                })}
                {ButtonEl.map(({ btnType, btnName }) =>
                {
                    return (<Button
                        btnType={btnType}
                        btnName={btnName}
                        key={btnName}
                    />)
                })}
            </form>
        )
    }
}

export default ContactForm