import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
    constructor() {
        super();

        // this.state = {
        //     url: '',
        //     shelf: '',
        //     name: '',
        //     num: null

        // }
    }
    
    componentWillReceiveProps(newProps) {
        // console.log('newProps');
        // const url = newProps.name ? "bin" : "create";
        // const shelf = newProps.shelf;
        // const num = newProps.number;
        // const name = newProps.name;

        // this.setState({ url, shelf, num, name })
    }

    render() {
        const url = this.props.name ? "bin" : "create";
        console.log("I exist");
        console.log(this.props);
        const { shelf, number, name } = this.props;
        return (
            <div>
                <Link className="list" to={`/${url}/${shelf}${number}`}>
                    { name ? `Bin ${number}` : "+ Add inventory to bin"}
                </Link>
            </div>
        )
    }
}