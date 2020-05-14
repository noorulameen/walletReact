import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }
    componentDidMount(){
        axios.get('https://gv11v.sse.codesandbox.io/users/listwallet')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    tabRow(){
        if(this.state.business.length> 0){
            let exp = 0;
            return this.state.business.map(function(object, i){
               // alert(object.income)
                exp += object.income
                return <TableRow obj={object} key={i} />;
            });
        }

    }
    tabRowExp(){
        if(this.state.business.length> 0){
            let exp = 0;
            let inc =0;
             this.state.business.map(function(object, i){
                 inc += parseInt(object.income);
                 exp += parseInt(object.expense);
                return <TableRow obj={object} key={i} />;
            });

            return 'Total Expence :'+ exp+   '   / '  + 'Total Income :'+ inc;
        }

    }

    render() {
        return (
            <div>
                <h3 align="center">Wallet List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>income</th>
                        <th>expense</th>
                        <th>createdAt</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                    <tbody>
                    { this.tabRowExp() }
                    </tbody>
                </table>
            </div>
        );
    }
}
