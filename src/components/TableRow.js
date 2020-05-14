import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(e) {
        e.persist();
        //alert(JSON.stringify(e))

        axios.delete('https://gv11v.sse.codesandbox.io/users/deletewallet/'+this.props.obj.id)
            .then(data =>{
                console.log('Deleted')
                window.location.reload(false);

            })
            .catch(err => console.log(err))


    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.income}
                </td>
                <td>
                    {this.props.obj.expense}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete}  className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;
