import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: null
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
        })
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <h1>Name</h1>
                <input onChange={(e) => this.handleNameChange(e.target.value)}/>
                <h1>Price</h1>
                <input type="number" onChange={(e) => this.handlePriceChange(e.target.value)}/>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><button onClick={this.addProduct}>+ Add Inventory</button></Link>
            </div>
        )
    }
}