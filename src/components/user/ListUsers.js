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
        this.setState({
            users :res.data
        })
      }
      componentDidMount() {
        this.getAllUsers();
      }

      onDelete = (id) => {
          window.$(`#delete${id}`).modal("hide")
        //   Delete from database
          axios.delete("/api/delete/" + id);
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
      const {users} = this.state;
      console.log(users);
    return (
        <div className="container padding_div div_center">
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
                    // RECEIVED USER DATA
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td><input type="checkbox" checked={user.experience} readOnly name="" /></td>
                                <td className="text-center">
                            {/* Edit User's Profile Button*/}
                                <button onClick={this.onUpdate.bind(this, user._id)} className="btn btn-info btn-xs"><i className="far fa-edit"></i></button>
                            {/* Delete User Button */}
                                <button type="button" data-toggle="modal" data-target={`#delete${user._id}`}  className="btn btn-danger btn-xs btnSpace"><i className="far fa-trash-alt"></i></button>
                                {/* MODAL is located here! */}
                                <div className="modal fade" id={`delete${user._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Important!</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Are you sure you want to <strong>delete</strong> this user?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                <button onClick={this.onDelete.bind(this, user._id)} type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
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
