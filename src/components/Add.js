import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import Header from './Header.js';

export default class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: null,
            redirect: false
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    handleNameChange(val) {

        this.setState({ name: val })
    } 

    handlePriceChange(val) {
        this.setState({ price: val })
    } 

    addProduct() {
        const { name, price } = this.state
        axios.post(`/api/bin/${this.props.match.params.id}`, { name, price }).then(res => {
            console.log(`Added item (${name}, ${price}) at ${this.props.match.params.id}`)
            this.setState({ redirect: true })
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`/bins/${this.props.match.params.id[0]}`} />
        }

        return (
            <div>
                <Header path="Shelf" id={this.props.match.params.id} name="add"/>
                <h1>Name</h1>
                <input onChange={(e) => this.handleNameChange(e.target.value)}/>
                <h1>Price</h1>
                <input type="number" onChange={(e) => this.handlePriceChange(e.target.value)}/>
                <button onClick={this.addProduct}>+ Add Inventory</button>
            </div>
        )
    }
}

{/* <Link to={`/bins/${this.props.match.params.id[0]}`}> */}