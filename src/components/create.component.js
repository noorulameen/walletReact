import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            income: '',
            expense:'',
            date:''
        }
    }
    onChangePersonName(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeBusinessName(e) {
        this.setState({
            income: e.target.value
        })
    }
    onChangeGstNumber(e) {
        this.setState({
            expense: e.target.value
        })
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: this.state.description,
            income: this.state.income,
            expense: this.state.expense,
            date:this.state.date
        };
        axios.post('https://gv11v.sse.codesandbox.io/users/insertwallet', obj)
            .then(res => {
                console.log(res.data);
                this.props.history.push('/index');
                e.preventDefault();
            })

        this.setState({
            description: '',
            income: '',
            expense: '',
            date:''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Add New wallet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:  </label>
                        <input
                            type="text"
                            className="form-control"
                            required={true}
                            value={this.state.description}
                            onChange={this.onChangePersonName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Income: </label>
                        <input type="number"
                               className="form-control"
                               required={true}
                               value={this.state.income}
                               onChange={this.onChangeBusinessName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expense: </label>
                        <input type="number"
                               className="form-control"
                               required={true}
                               value={this.state.expense}
                               onChange={this.onChangeGstNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input type="date"
                               placeholder="MM/DD/YYY"
                               className="form-control"
                               required={true}
                               value={this.state.date}
                               onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value="Register Wallet"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
