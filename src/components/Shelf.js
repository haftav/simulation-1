import React, { Component } from 'react';
import axios from 'axios';

import List from './List.js';

export default class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({ bins: res.data })
        })
    }

    render() {
        const bins = this.state.bins.map((el, idx) => {
            return (
                <div>
                { this.state && this.state.bins &&
                <List shelf={this.props.match.params.id}
                    number={el.id}
                    name={el.name} />
                }
                </div>
            )
        })
        return (
            <div>
                <h1>SHELF {this.props.match.params.id}</h1>
                { bins }
                {/* <List url="create"  
                    shelf={this.props.match.params.id}
                    number="1" />
                <List url="bin"  
                    shelf={this.props.match.params.id}
                    number="2" />
                <List url="create"  
                    shelf={this.props.match.params.id}
                    number="3" />
                <List url="create"  
                    shelf={this.props.match.params.id}
                    number="4" />
                <List url="create"  
                    shelf={this.props.match.params.id}
                    number="5" /> */}

            </div>
        )
    }
}