import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            disabled: true,
            name: '',
            price: null
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

        return (
            <div>
                <h1>Name</h1>
                <input placeholder={this.state.product.name} 
                        disabled={this.state.disabled}
                        onChange={(e) => this.handleNameChange(e.target.value)}
                        value={this.state.name}/>
                <h1>Price</h1>
                <input placeholder={this.state.product.price} 
                    disabled={this.state.disabled}
                    type="number"
                    onChange={(e) => this.handlePriceChange(e.target.value)}/>
                <button onClick={this.handleClick}>{this.state.disabled ? 'Edit' : 'Save'}</button>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><button onClick={this.deleteProduct}>Delete</button></Link>
            </div>
        )
    }
}