import React, { Component } from 'react';
import axios from 'axios';

import List from './List.js';
import Header from './Header.js';

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



                <Header page="shelf" id={this.props.match.params.id} name=""/>

                { bins }


            </div>
        )
    }
}