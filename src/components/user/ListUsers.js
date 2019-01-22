import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class ListUsers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          users :[]
        };
      }

      getAllUsers = async ()=>{
        const res = await axios.get("/api/users");
        // console.log("ddd");
        // console.log(res.data);
        this.setState({
            users :res.data
        })
      }
      componentDidMount() {
        this.getAllUsers();
      }

      onDelete = (id) => {
          // Delete from database
          axios.delete("/api/user/" + id);
          // Delete from state
          this.setState({
              users: this.state.users.filter(
                  (user) => {
                    return user._id !== id;
                  }
              )
          })
      }
      onUpdate = (id) => {
        this.props.history.push({
            pathname: `/admin`,
            state: { id: id }
          });
    }
    
  render() {
    //   console.log(this.state.users);
      const {users} = this.state;
    return (
        <div className="container padding_div div_center">
        {/* <h1 >List of all users</h1>
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>First name</th>
                <th>Last name</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, i) => {
                return(
                    
                    <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                    </tr>
            );
        })}
        </tbody>
        </table> */}
    <div className="row custyle">
        <div>
        <Link to="/register" href="#" className="btn btn-primary btn-xs"><b>+</b> Add new user</Link>
        </div>
    <br/>
    <br/>
    <div className="table-responsive">
        <table className="table table-striped custab">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Applied as CHEF</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            {/* USERS' INFORMATIONS */}
                <tbody>
                    {users.map((user, i) => {
                                return(
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td><input type="checkbox" checked={user.experience} readOnly name="" /></td>
                                {/* <i class="fas fa-circle"></i> */}
                                <td className="text-center">
                            {/* Edit User's Profile */}
                                {/* <Link to="/admin" className='btn btn-info btn-xs"' href="#"><i className="far fa-edit"></i></Link> */}
                                <button onClick={this.onUpdate.bind(this, user._id)} className="btn btn-info btn-xs"><i className="far fa-edit"></i></button>
                            {/* Delete User Button */}
                                <button onClick={this.onDelete.bind(this, user._id)} className="btn btn-danger btn-xs btnSpace"><i className="far fa-trash-alt"></i></button></td>
                            </tr>
                                );
                            })}
                </tbody>
        </table>
        </div>
    </div>
</div>
    )
  }
}
