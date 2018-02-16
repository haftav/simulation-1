import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './Header.js';
import { Redirect } from 'react-router';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            disabled: true,
            name: '',
            price: null,
            redirect: false
        }

        this.deleteProduct = this.deleteProduct.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/bin/${this.props.match.params.id}`).then(res => {
            console.log(res.data[0].name);
            this.setState({ 
                product: res.data[0],
                name: res.data[0].name,
                price: res.data[0].price
            })
        })
    }

    deleteProduct() {
        axios.delete(`/api/bin/${this.props.match.params.id}`).then(res => {
            console.log('I deleted something :(');
            console.log(this.props.match.params.id);
            this.setState({ redirect: true })
        })
    }

    handleNameChange(val) {
        this.setState({ name: val })
    }

    handlePriceChange(val) {
        this.setState({ price: val })
    }

    handleClick() {

        this.setState({ disabled: !this.state.disabled });
        console.log(this.state.disabled);
        if (this.state.disabled === false) {
            const { name, price } = this.state;
            axios.put(`/api/bin/${this.props.match.params.id}`, {name, price}).then(res => {
                console.log(res.data);
            })
        }

    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`/bins/${this.props.match.params.id[0]}`} />
        }

        return (
            <div >
                <Header page="shelf" id={this.props.match.params.id} name="edit"/>
                <div className="edit">
                    <img src="http://lorempixel.com/200/200/business/" alt="" />
                    <div className="image-input-wrapper">
                        <div>
                            <h1>Name</h1>
                            <input placeholder={this.state.product.name} 
                                    disabled={this.state.disabled}
                                    onChange={(e) => this.handleNameChange(e.target.value)}
                                    value={this.state.name}/>
                        </div>
                        <div>
                        <h1>Price</h1>
                            <input placeholder={this.state.product.price} 
                                disabled={this.state.disabled}
                                type="number"
                                onChange={(e) => this.handlePriceChange(e.target.value)}
                                value={this.state.number}
                                class="number-input"/>
                        </div>
                    </div>
                    <div className="edit-button-div">
                        <button 
                        onClick={this.handleClick}
                        className={this.state.disabled ? 'edit-button' : 'save-button'}>{this.state.disabled ? 'EDIT' : 'SAVE'}</button>
                        <button onClick={this.deleteProduct} className="delete-button">DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}